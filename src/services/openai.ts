import axios from "axios";

const apiKey = import.meta.env.VITE_GROQ_API_KEY;

const groq = axios.create({
  baseURL: "https://api.groq.com/openai/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
});

export const generateBookReview = async (bookTitle: string) => {
  try {
    const response = await groq.post("/chat/completions", {
      model: "meta-llama/llama-4-scout-17b-16e-instruct",
      messages: [
        {
          role: "user",
          content: `
          Escreva 3 pequenas avaliações criativas e variadas (positivas e negativas) sobre o livro "${bookTitle}".
          
          Responda no formato JSON, uma lista de objetos com campos "name", "text" e "score". O campo "name" deve ser o nome e sobrenome da pessoa. O campo "text" deve ser o texto da avaliação. O campo score deve ser um número de 1 a 5.

          Exemplo de Resposta:
            \`\`\`json
              [
                {
                  "name": "Nome e Sobrenome 1",
                  "text": "Texto da review 1",
                  "score": Número inteiro de 1 a 5
                },
                {
                  "name": "Nome e Sobrenome 2",
                  "text": "Texto da review 2",
                  "score": Número inteiro de 1 a 5
                },
                {
                  "name": "Nome e Sobrenome 3",
                  "text": "Texto da review 3",
                  "score": Número inteiro de 1 a 5
                }
              ]
            \`\`\`
          
          Sua resposta deve ser apenas o JSON.
          `,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const content = response.data.choices[0].message.content;
    const match = content.match(/```json\s*([\s\S]*?)\s*```/);

    if (match) {
      const jsonString = match[1];
      try {
        const reviews = JSON.parse(jsonString);
        return reviews;
      } catch (err) {
        console.error("Erro ao fazer parse do JSON:", err);
        return [];
      }
    }

    return [];
  } catch (error) {
    console.error("Erro ao gerar review:", error);
    return null;
  }
};
