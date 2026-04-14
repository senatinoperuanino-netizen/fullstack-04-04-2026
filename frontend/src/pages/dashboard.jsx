import { use, useEffect, useState } from "react";
import axios from "axios";

function Dashboard()
{
    //estadp de la lista de tareas
    const [task, setTask] = useState([]);
    //estado para la nueva tarea
    const[title, setTitle] = useState("");
    //obtener el token del localStorage
    const token = localStorage.getItem('token');
    
    const getTasks = async () => {
        try{
            //consulto las tareas al backend
            const res = await axios.get('http://localhost:3000/api/tasks', {
                headers: {
                    Authorization: token//enviamos el token
                }
            });
            //guardo el estado de la tarea
            setTask(res.data);
            } catch(error) {
                console.error('error al obtener las tareas:', error);
            }
        };
        getTasks();
    //crear una nueva tarea
    const createTask = async () => {
        try{
            await axios.post('http://localhost:3000/api/tasks', { title }, {
                headers: {Authorization: token}
            });
            //limpiar el input
            setTitle("");
            getTasks(); //actualizar la lista de tareas
        }catch(error) {
            console.error('error al crear la tarea:', error);
        }
    };
    useEffect(() => {
        getTasks();
    }, [token]);
    return (
        <div className="min-h-screen bg.gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Mis Tareas</h1>
            <div className="bg-white w-full mas-w-md p-6 rounded2xl shadow-2xl">

            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nueva tarea" />
            <button onClick={createTask}>Agregar</button>
            <ul>
                {task.map((t) => (
                    <li key={t.id}>{t.title}</li>
                ))}
            </ul>
            </div>
        </div>
    );
    }
export default Dashboard;