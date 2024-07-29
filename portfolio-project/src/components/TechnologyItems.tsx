export default function TechnlogyItems(props:any){
    return (
        <>
            <div className="py-[1%]">
                <p className="font-semibold text-2xl mb-[1%]">{props.sectionTitle}</p>
                <ul>
                    {
                        props.technologies.map((tech:string,index:number)=><span className={`font-bold text-sm bg-violet-600 py-2 px-4 rounded-full ${index !=0 && "ml-5"}`} key={index}>{tech}</span>)
                    }
                </ul>
            </div>
        </>
    )
}