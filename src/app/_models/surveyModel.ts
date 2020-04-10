export interface surveyModel {
    surveyId: number
    surveyName: string,
    isPublished: string,
    qsStatus: string,
    fromDate: Date,
    toDate: Date,
    fromTime: string,
    toTime: string,
    pocEntity: {
        pocName: string,
        mail: string,
        status: string,
        accesskey: string,
        companyEntity: {
            companyId: number,
            companyName: string,
            logo: string,

        }
    },
    DimensionEntity: {
        dimension_id: number,
        dimensionName: string,
        status: string,
    },
    WelcomeMsgEntity: {
        welcomeMessage : string,
        welcomeLogo: string
        }
}