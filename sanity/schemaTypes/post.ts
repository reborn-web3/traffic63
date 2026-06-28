import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Статья блога',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Автор',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Категория',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Дата публикации',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      }
    }),
    defineField({
      name: 'readTime',
      title: 'Время чтения',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Главное изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Краткое описание',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Текст статьи',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'date',
    },
  },
})
