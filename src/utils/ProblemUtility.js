const axios = require("axios")

const getLanguageById = (lang) =>{
    const language = {
        "c++":54,
        "java":62,
        "javascript":63
    }
    return language[lang.toLowerCase()]
}

const submitBatch = async (submissions) =>{

    // you get this code snippet in create batch submission on judge0
    const options = {
  method: 'POST',
  url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
  params: {
    base64_encoded: 'true'
  },
  headers: {
    'x-rapidapi-key': '6da88f6de9mshf1f75c11a691142p156adbjsn8d906b42026a',
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    // send the submission
    submissions
  }
};

async function fetchData() {
	try {
		const response = await axios.request(options);
		return response.data
	} catch (error) {
		console.error(error);
	}
}

return await fetchData();
}

module.exports = {getLanguageById,submitBatch}