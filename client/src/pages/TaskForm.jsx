import { Formik, Form } from "formik";
import { TaskContext } from "../context/TaskContext.jsx";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskForm() {
  const { addTask, getOneTask, updateTask } = useContext(TaskContext);
  const [oneTask, setOneTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadOneTask = async () => {
      if (params.id) {
        const task = await getOneTask(params.id);
        setOneTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadOneTask();
  }, []); //eslint-disable-line

  return (
    <div className="flex justify-center items-center w-full flex-col">
      <h1 className="text-2xl font-bold text-left py-4 font-['Handlee']">
        {params.id ? "Edit Your Task" : "Create New Task"}
      </h1>
      <div className="w-3/5 p-10">
      <Formik 
        
        initialValues={oneTask}
        enableReinitialize={true}
        onSubmit={async (values) => {
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await addTask(values);
          }
          navigate("/");
          setOneTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-700 p-4 rounded-md font-['Handlee']"
          >
            <label htmlFor="title" className="py-2 block">
              Title:
            </label>
            <input
              className="block px-2 py-1 rounded-sm w-full text-black"
              spellCheck={false}
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title || ""}
            ></input>
            <label htmlFor="description" className="py-2 block">
              Description:
            </label>
            <textarea
              className="block px-2 py-1 rounded-sm w-full h-max text-black"
              name="description"
              spellCheck={false}
              rows="10"
              placeholder="Write a description..."
              onChange={handleChange}
              value={values.description || ""}
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 text-white px-2 py-1 my-4 font-bold"
            >
              {isSubmitting ? "SAVING" : "SAVE"}
            </button>
          </Form>
        )}
      </Formik>
      </div>
    </div>
  );
}
