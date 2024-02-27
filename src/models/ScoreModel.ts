class ScoreModel{
   
    
    studentID:string;
    courseID:string;
    year:string;
    assignmentType:string;
    assignmentScore:number;
    level:string;
    semester:string;
    id:number;
   
   

    constructor(id: number,  studentID: string, courseID: string, year: string,  level: string,
        semester: string, assignmentType:string, assignmentScor:number){

           this.id = id;
           this.studentID = studentID;
           this.courseID = courseID;
           this.year = year;
           this.level = level;
           this.semester = semester;
           this.assignmentType = assignmentType;
           this.assignmentScore = assignmentScor;
       }

}

export default ScoreModel;