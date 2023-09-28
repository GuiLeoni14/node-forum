import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { Question } from '../../enterprise/entities/question'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Slug } from '../../enterprise/entities/value-objects/slug'

let questionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase

describe('Get question use case', () => {
  beforeEach(() => {
    questionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlugUseCase(questionsRepository)
  })
  it('should be to get a question by slug', async () => {
    const newQuestion = Question.create({
      slug: Slug.create('nova-pergunta'),
      title: 'Nova pergunta',
      authorId: new UniqueEntityID(),
      content: 'Conteúdo da pergunta',
    })

    await questionsRepository.create(newQuestion)

    const { question } = await sut.execute({
      slug: 'nova-pergunta',
    })

    expect(question.slug.value).toEqual(newQuestion.slug.value)
  })
})
