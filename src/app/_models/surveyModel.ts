export interface surveyModel{
    surveyName:string,
    isPublished : string,
    qsStatus:string,
    fromDate:Date,
    toDate:Date,
    fromTime:string,
    toTime:string,
    pocEntity:{
        pocName:string,
        pocEmail:string,
    }    
}