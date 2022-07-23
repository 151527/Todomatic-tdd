import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Form from "./Form";
describe("should render basic form",()=>{
    it("should have input field to enter name with empty value",()=>{
        const component=render(<Form/>)
        expect(component.getByTestId("new-todo-input")).toHaveTextContent("");
    })
    it("Should have a button to add text",()=>{
        const component=render(<Form/>)
        expect(component.getByTestId("addtaskbutton")).not.toBeDisabled;

    })
    it("should have a label of What needs to be done?",()=>{
        const {getByTestId} = render(<Form/>);
        expect(getByTestId("formLabel")).toHaveTextContent("What needs to be done?");

    })
})
describe("testing functionality of form",()=>{
    it("should be able to enter task name",()=>{
        const component=render(<Form/>)
        fireEvent.change(component.getByTestId('new-todo-input'),{target:{value:"Sleep"}});
        expect(component.getByTestId("new-todo-input")).toHaveAttribute("value","Sleep");
    })
})