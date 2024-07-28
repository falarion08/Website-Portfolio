export default function TechnlogyItems(props:any){
    return (
        <>
            <div className="py-[1%]">
                <p className="font-semibold text-2xl mb-[1%]">{props.sectionTitle}</p>
                <ul>
                    {
                        props.technologies.map((tech:string,index:number)=><span className={`font-extralight text-lg bg-violet-600 p-2 rounded-2xl ${index !=0 && "ml-5"}`} key={index}>{tech}</span>)
                    }
                </ul>
            </div>
        </>
    )
}