const Problem = require("../models/Problem");
const {getLanguageById,submitBatch,submitToken} = require("../utils/ProblemUtility");

const createProblem = async (req, res) => {
  // admin send the details of problem and we have to store it in db

  const {
    title,
    description,
    difficulty,
    tags,
    visibleTestCases,
    hiddenTestCases,
    startCode,
    problemCreator,
    referenceSolution,
  } = req.body;

  // we have to check reference solution is valid or not before storing it into db for all language
  // we have visibleTestCases and hiddenTestCases (input/output) // check karo isko judge0 ki help se 

  try {
    // iterate the reference solution array (it have complete code for all languages)
    for(const {language,completeCode} of referenceSolution){
        // we provide lang ,completecode ,input,output to judge0

        // format of data we have to send to judge0 => {source_code,language_id,stdin,expected_output}
        const languageId = getLanguageById(language)
        //create the submission array of each language (batch creation)
        const submissions = visibleTestCases.map((testcase)=>{
            return{ 
                source_code:completeCode,
                language_id:languageId,
                stdin:testcase.input,
                expected_output:testcase.output
        }})
        // submit the batch
        const submitResult = await submitBatch(submissions) // it return array of tokens  (//step : create a submission Batch)

        // (get a submission batch (we get the actual result with the help of this tokens))
        const resultToken = submitResult.map((value)=>value.token) // making a array of tokens values ['token1value','token2value']
        // submit the tokens
        const testResult = submitToken(resultToken)

        //  now we get the submission result now check the status id
        for(const test of testResult){
          // status_id 3 means accepted
          if(test.status_id!=3){
            return res.status(400).send("Error Occured")
          }
        }
   }

  //we can store the problem to db now when for loop completed 
  await Problem.create({
    ...req.body,
    problemCreator:req.result._id
   })
    
  } catch (err) {
    res.status(400).send("Error : "+err)
  }
};

module.exports =  {createProblem}