import Employee from "../models/Employee.js";

export async function createEmployee(req, res) {
    const emp = new Employee(req.body);

    try {
        await emp.save();
        res.send(emp);
    } catch (e) {
        if (e.name == "ValidationError") {
            res.status(422).json({ errors: "e.errors" });
        } else {
            res.send(500).json({ errors: "Server Error" });
        }
    }
}

export async function getEmployee(req, res) {
    const empList = await Employee.find();
    res.json(empList);
}

export async function deleteEmployee(req, res) {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.send("Succesfully deleted");
}

export async function editEmployee(req, res) {
    const { id } = req.params;
    const emp = await Employee.findById(id);
    if (!emp) {
        res.status(404).json({ errors: "Employee not found" });
    }

    await Employee.findByIdAndUpdate(id, req.body);
    console.log("DONE");
    res.send("Succesfully Edited");
}
