import { CreateQuestionUseCase } from './create-question'
import { QuestionsRepository } from '../repositories/questions-repository'
import { Question } from '../../enterprise/entities/question'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {
    console.log(question)
  },
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'Nova pergunta',
    content: 'Conteúdo da pergunta',
  })

  expect(question.id).toBeTruthy() // value true ou seja não pode ser null | undefined...
})
