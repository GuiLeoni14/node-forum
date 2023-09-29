import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  const question = Question.create({
    slug: Slug.create('nova-pergunta'),
    title: 'Nova pergunta',
    authorId: new UniqueEntityID(),
    content: 'Conteúdo da pergunta',
    ...override,
  })

  return question
}
