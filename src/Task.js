import "./task.css";

export function TaskCard({ ready }) {
  // los migro al css
  // const cardStyle = {background:"#202020", color:"#ffff", padding:"20px"}
  // const titleStyle = {fontWeight:"lighter"}

  return (
    <div className="card">
      <h1>Mi primer tarea</h1>
      <span className={ready ? 'bg-green':'bg-red'}>
        {ready ? "tarea realizada" : "tarea pendiente"}
      </span>
    </div>
  );
}
