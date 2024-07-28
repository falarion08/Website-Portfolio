import TopNavigationBar from "./components/TopNavigationBar"
import WorkItemComponent from "./components/WorkItemComponent"
import ProjectItemComponent from "./components/ProjectItemComponent"
import TechnlogyItems from "./components/TechnologyItems"
import prof_pic from "./assets/prof_casual.jpg"
import { JobInfo,Project } from "./types/types"

function App() {

  const experiences: JobInfo[] = [
    {
      jobTitle: "Software Developer",
      companyName: "Ratio", startDate: "April 2024",
      endDate: "June 2024", 
      jobAccomplishment: ["Designed and developed the homepage of a dating application, utilizing the React Native framework and Tailwind CSS to create a responsive and visually appealing user interface.",
        "Implemented APIs from Firebase and MongoDB to retrieve and display user images and data, ensuring dynamic content updates across various devices and screen sizes."
      ]
    },

    {
      jobTitle: "Freelance Developer",
      companyName: "Jobs For Editors", startDate: "June 2023",
      endDate: "April 2024", 
      jobAccomplishment: ["Successfully executed diverse projects, creating intuitive web applications with Express, JavaScript, Vue, and ReactJS, and conducting comprehensive data analysis for client projects.",
        "Developed software using C/C++, Java, and Python, showcasing adaptability and technical expertise across various programming languages."
      ]
    },
    {
      jobTitle:"Data Analyst Intern",
      companyName:"MySuki",
      startDate:"Aug 2023",
      endDate:"November 2023",
      jobAccomplishment:["Engineered a Python algorithm to automate the categorization of supermarket product data, processing over 300 entries. Utilized regular expressions for data parsing and cleaning, optimizing efficiency and accuracy.",
        "Spearheaded the automation of manufacturer identification for 10.6 thousand supermarket products by harnessing Python and Selenium for data mining. Extracted and analyzed barcode information, streamlining the process, and enhancing productivity.",
        "Played a pivotal role in categorizing and meticulously cleaning 26.7 thousand entries of supermarket product data. Implemented strategies to identify competitors for a specified manufacturing company, contributing to comprehensive market analysis and strategic decision-making."
      ]
    }
  ]

  const projects:Project[]=[
    {
      title:"Workbox",
      url:"https://github.com/falarion08/Workbox",
      description:"Workspace Management Platform",
      techs:["Flask","Python","TailwindCSS","PostgreSQL"]
    },
    {
      title:"Monthly Food Price Inflation Prediction in the Philippines",
      description:"A case study that uses supervised learning algorithms and MLP neural network to predict food price inflation in the Philippines using market average.",
      url:"https://github.com/falarion08/Philippine-Food-Inflation-Prediction/blob/main/ML_Notebook.ipynb",
      techs:["Python", "Pandas","Scikit-learn","Numpy","XGBoost"]
    },
    {
      title:"Online Enrollment System",
      url:"https://ils-study-center.onrender.com",
      description:"An online enrollment system that automates the task of enrollment built for a client owns a summer school",
      techs:["Express","JavaScript","EJS","MongoDB"]
    }
  ]

  const tech_sections:string[]=["Programming Languages","Front End Frameworks","Backend Frameworks","Database Toos","CSS Frameworks","Data Science Tools and Libraries","Parallel Computing Platforms"];

  const languages:string[]= ["Python", "Javascript(ES6+)","Typescript","Java","C/C#","MATLAB"];
  const fe_fw:string[] = ["React/React Native", "VueJS"];
  const be_fw:string[] = ["Express", "Flask"];
  const databases:string[]= ["PostgreSQL","MySQL","MongoDB"];
  const css_fw: string[] =["BulmaCSS","TailwindCSS","Bootstrap"];
  const ds_tools:string[]= ["Jupyter Notebook","Scikit-Learn","Pandas","Plotly","Seaborn","Matplotlib","NumPy"];
  const paralle_cp:string[] =["CUDA C++","SIMDx64/x86"]

  const sec_items:string[][] = [languages, fe_fw,be_fw,databases,css_fw,ds_tools,paralle_cp]



  return (
    <>
      <TopNavigationBar />

      <div className="px-[18%] py-[8%]">

        <h1 className="  text-3xl">Hi, my name is</h1>
        <p  className=" font-bold  text-7xl">Ryan Onil Barrion</p>

        <h2 className="text-7xl font-bold py-[2%]">I am a Software Developer</h2>

        <p className="text-lg pt-4 w-[60%] leading-8 tracking-normal ">
          I am a software engineer and an AI enthusiast, driven by a passion for technology and innovation.
          My expertise lies in building dynamic software solutions and exploring the transformative potential
          of artificial intelligence.
        </p>

      </div>

      {/* About Me */}

      <div className="px-[19%] mt-[10%]">
        <h1 className=" text-4xl font-bold tracking-normal">About Me</h1>

        <div className="flex flex-row flex-wrap-reverse gap-10">
          <div className="flex-1 py-[5%]">
              <p className="text-lg leading-loose font-extralight">
              Hi, my name is Ryan Onil Barrion, an undergraduate student majoring in Computer Science with a minor in Data Science.
              I find immense joy in software development, which I view as a thrilling process where I transform ideas into user-friendly, 
              functional solutions. I take pride in writing clean, efficient code and building full-stack web and mobile applications 
              to enhance user experiences and address real-life challenges. My enthusiasm for machine learning further enriches my work, 
              as I am excited by the potential of intelligent systems to learn and adapt, turning data into actionable insights. 
              The convergence of software development and machine learning fuels my creativity and drive, making each project an 
              opportunity to push the boundaries of what's possible. I am committed to continuous learning and innovation in all aspects 
              of my work.
            </p>
           
          </div>

          <div className="flex justify-center items-center">
          <img src={prof_pic} className="size-80"/>

          </div>
        </div>

      </div>

    {/* Work Experience */}
      <div className="px-[15%] mt-[10%]">

        <h1 className="text-5xl font-extrabold">Where I've worked</h1>

          {experiences.map(
            (jobItem:JobInfo, i:number)=> <WorkItemComponent job={jobItem} key={i}/>)
          }
      </div>

      {/*PROJECTS*/}
      <div className="px-[8%] mt-[10%]">
        <h1 className="text-5xl font-extrabold">Some of the things I've built</h1>
        <div className="grid grid-cols-3 gap-10 py-[5%]">
          {projects.map((project:Project,index:number)=><ProjectItemComponent key={index} project={project}/>)}

        </div>
      </div>

      {/* Skills */}

      <div className="mt-[10%] px-[10%]">
        <h1 className=" font-bold text-5xl mb-4">Technologies I have worked with</h1>
        {
          tech_sections.map((section:string, index:number)=><TechnlogyItems sectionTitle={section} technologies={sec_items[index]}/>)
        }
    </div>

    </>
  )
}

export default App
