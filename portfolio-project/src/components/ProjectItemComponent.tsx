export default function ProjectItemComponent(props:any){
    return (
        
        <a href={props.project.url} className="border rounded-xl text-center py-[8%] px-[4%] text-wrap">
            <h1 className="font-bold text-3xl">{props.project.title}</h1>
            
            <h2 className="text-base my-[8%] text-start">{props.project.description}</h2>

            <div className="grid grid-cols-3 gap-y-5 gap-x-2 ">
                {props.project.techs.map((tech:string, index:number)=><div className="flex-1 p-1 text-sm flex items-center justify-center  bg-violet-600  font-bold rounded-full" key={index}>{tech}</div>)}
            </div>
        </a>
    )
}
