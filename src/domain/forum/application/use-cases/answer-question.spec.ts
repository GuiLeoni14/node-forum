import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

let answerRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Answer question use case', () => {
  beforeEach(() => {
    answerRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(answerRepository)
  })
  it('should be create an answer', async () => {
    const { answer } = await sut.execute({
      questionId: '1',
      instructorId: '1',
      content: 'Nova resposta',
    })

    expect(answer.content).toEqual('Nova resposta')
    expect(answerRepository.items[0].id).toEqual(answer.id)
  })
})
