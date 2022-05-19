export type Hamlet = {
    hamletId: number;
    title: string;
    questions: Questtions[];
}

export type Questtions = {
    questionId : number
    kinds : number
    point : number
    time : number
    orders : number
    multiple : boolean
    contents : string
    options : Options[]
}

export type PutOptions = {
    optionId? : number
    contents : string
    answer : boolean
}

export type Options = {
    optionId : number
    contents : string
    answer : boolean
}

