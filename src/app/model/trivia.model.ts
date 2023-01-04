// {"response_code":0,
//  "results":
//     [{"category":"Entertainment: Film",
//       "type":"multiple",
//       "difficulty":"easy",
//       "question":"What was the first monster to appear alongside Godzilla?",
//       "correct_answer":"Anguirus",
//       "incorrect_answers":["King Kong","Mothra","King Ghidora"]}]
// }

export type Trivia = {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    mixed_answers: string[];
}

export type TriviaReturn = {
    response_code: number;
    results: Trivia[];
}