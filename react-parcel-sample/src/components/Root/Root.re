open RootReducer;

/* Helpers */
let printItemStatus = itemStatus =>
  switch itemStatus {
  | Done(date) => {j|Erledigt am: $date|j}
  | Open => {j|Offen|j}
  };

/* component */
let component = ReasonReact.reducerComponent("Root");

let make = _children => {
  ...component,
  initialState: () => initialState,
  reducer: rootReducer,
  render: self => {
    Js.log(self.state.modalVisible);
    <div
      className="container" style=(ReactDOMRe.Style.make(~height="100vh", ()))>
      <RootHeader />
      <div className="row">
        <div className="col">
          <TodoInput
            value=self.state.newItem.itemName
            onChange=(
              self.reduce(event =>
                UpdateNewItem(
                  ReactDOMRe.domElementToObj(ReactEventRe.Form.target(event))##value
                )
              )
            )
          />
          <TodoButton
            iconName="plus"
            label="Add"
            onClick=(self.reduce(e => AddNewItem))
          />
        </div>
      </div>
      <table
        className="table table-light table-striped table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th> (Utils.str("Item")) </th>
            <th> (Utils.str("Status")) </th>
            <th> (Utils.str("Actions")) </th>
          </tr>
        </thead>
        <tbody>
          (
            Array.of_list(self.state.todolist)
            |> Array.map(item =>
                 ReasonReact.cloneElement(
                   <tr
                     onClick=(
                       self.reduce(_e => {
                         Js.log("huhu");
                         OpenModal(item);
                       })
                     )
                     key=(string_of_int(item.id))
                   />,
                   ~props={
                     "data-toggle": "modal",
                     "data-target": "#exampleModal"
                   },
                   [|
                     <td> (Utils.str(item.itemName)) </td>,
                     <td>
                       (item.itemStatus |> printItemStatus |> Utils.str)
                     </td>,
                     <td>
                       <TodoButton
                         iconName="check-square"
                         className="btn btn-success mr-4"
                         label="Check"
                         onClick=(self.reduce(e => CloseItem(item.id)))
                       />
                       <TodoButton
                         iconName="trash"
                         className="btn btn-danger"
                         label="Delete"
                         onClick=(self.reduce(e => DeleteItem(item.id)))
                       />
                     </td>
                   |]
                 )
               )
            |> ReasonReact.arrayToElement
          )
        </tbody>
      </table>
      <Modal visible=self.state.modalVisible />
    </div>;
  }
};