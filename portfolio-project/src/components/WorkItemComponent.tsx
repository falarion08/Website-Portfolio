
export default function WorkItemComponent(props:any){
    return(
        <>
        <div className="py-[2.5%]">
            <span className="text-3xl font-semibold">{props.job.jobTitle}</span> <span className="text-3xl font-semibold text-violet-400">@{props.job.companyName}</span>
            <p className="font-semibold text-xl py-[1%]">{props.job.startDate} - {props.job.endDate === undefined ? "Present" : props.job.endDate}</p>

            <ul className="list-disc">
                {props.job.jobAccomplishment.map((accomplishment:string,i:number)=><li className="py-[0.2%] text-base font-extralight leading-7" key={i}>{accomplishment}</li>)}
            </ul>
        </div>

        </>
    )
}