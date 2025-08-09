import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import Icon from '@/components/ui/icon'
import { useState } from 'react'

interface Comment {
  id: number
  author: string
  content: string
  date: string
  avatar?: string
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  tags: string[]
  likes: number
  comments: Comment[]
}

const samplePosts: BlogPost[] = [
  {
    id: 1,
    title: "Современные тренды в веб-дизайне 2024",
    excerpt: "Исследуем последние тенденции в UI/UX дизайне и их влияние на пользовательский опыт...",
    content: "Веб-дизайн постоянно эволюционирует, и 2024 год принес множество интересных трендов. От минимализма до ярких градиентов - современный дизайн становится более смелым и выразительным.",
    author: "Анна Дизайнер",
    date: "15 января 2024",
    readTime: "5 мин",
    tags: ["дизайн", "тренды", "UI/UX"],
    likes: 42,
    comments: [
      {
        id: 1,
        author: "Михаил",
        content: "Отличная статья! Особенно понравился раздел про градиенты.",
        date: "16 января 2024",
        avatar: "М"
      },
      {
        id: 2,
        author: "Елена Кодер",
        content: "Согласна с трендами, но минимализм все еще актуален на мой взгляд.",
        date: "17 января 2024",
        avatar: "ЕК"
      }
    ]
  },
  {
    id: 2,
    title: "React 18: Новые возможности для разработчиков",
    excerpt: "Разбираем ключевые обновления React 18 и как они изменят разработку приложений...",
    content: "React 18 представил множество революционных изменений, включая автоматический батчинг, Suspense и новые хуки. Эти возможности открывают новые горизонты для создания производительных приложений.",
    author: "Владимир Кодов",
    date: "12 января 2024",
    readTime: "8 мин",
    tags: ["React", "JavaScript", "разработка"],
    likes: 67,
    comments: [
      {
        id: 3,
        author: "Дмитрий",
        content: "Полезно! Уже начал внедрять Suspense в проекте.",
        date: "13 января 2024",
        avatar: "Д"
      }
    ]
  },
  {
    id: 3,
    title: "Искусство создания контента: Гид для блогеров",
    excerpt: "Практические советы по созданию увлекательного контента, который читают и запоминают...",
    content: "Создание качественного контента - это искусство, которое требует понимания аудитории, креативности и последовательности. В этой статье мы рассмотрим проверенные стратегии.",
    author: "Мария Контент",
    date: "10 января 2024", 
    readTime: "6 мин",
    tags: ["контент", "блогинг", "маркетинг"],
    likes: 38,
    comments: []
  }
]

export default function Index() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [newComment, setNewComment] = useState("")
  const [commentAuthor, setCommentAuthor] = useState("")

  const handleAddComment = (postId: number) => {
    if (!newComment.trim() || !commentAuthor.trim()) return
    
    const comment: Comment = {
      id: Date.now(),
      author: commentAuthor,
      content: newComment,
      date: new Date().toLocaleDateString('ru-RU'),
      avatar: commentAuthor.charAt(0).toUpperCase()
    }
    
    // В реальном приложении здесь был бы API вызов
    setNewComment("")
    setCommentAuthor("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="gradient-bg text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">MODERN BLOG</h1>
          <p className="text-xl opacity-90 mb-8">Современный блог о технологиях, дизайне и разработке</p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" size="lg" className="bg-white text-gray-800 hover:bg-gray-100">
              <Icon name="PenTool" size={20} className="mr-2" />
              Читать статьи
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-800">
              <Icon name="Users" size={20} className="mr-2" />
              О блоге
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">О нашем блоге</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Добро пожаловать в современное пространство для обмена знаниями и идеями! 
                Мы создаем контент о последних трендах в технологиях, делимся опытом разработки 
                и исследуем будущее цифрового мира.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">150+</div>
                  <div className="text-gray-600">Статей</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">25K+</div>
                  <div className="text-gray-600">Читателей</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/12c2b6a6-48dc-4adf-b365-4553839a55d9.jpg" 
                alt="Автор блога за работой" 
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 gradient-bg rounded-full opacity-20"></div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Последние <span className="gradient-text">статьи</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplePosts.map((post) => (
              <Card key={post.id} className="blog-card cursor-pointer group" onClick={() => setSelectedPost(post)}>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Icon name="Calendar" size={16} />
                    {post.date}
                    <span className="mx-2">•</span>
                    <Icon name="Clock" size={16} />
                    {post.readTime}
                  </div>
                  <CardTitle className="group-hover:text-[#FF6B6B] transition-colors duration-200">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs gradient-bg text-white">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Icon name="Heart" size={16} />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="MessageCircle" size={16} />
                        {post.comments.length}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto w-full">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold">{selectedPost.title}</h1>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Icon name="X" size={24} />
                </Button>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="text-xs gradient-bg text-white">
                      {selectedPost.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span>{selectedPost.author}</span>
                </div>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedPost.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6">
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">{selectedPost.content}</p>
                <img 
                  src="/img/e88cab1c-7878-4eea-a658-880b76986642.jpg" 
                  alt="Иллюстрация к статье" 
                  className="rounded-lg w-full my-6"
                />
                <p className="text-gray-700 leading-relaxed">
                  Продолжение статьи раскрывает более глубокие аспекты темы. 
                  Мы рассматриваем практические примеры и делимся личным опытом, 
                  который поможет читателям лучше понять материал.
                </p>
              </div>

              <div className="flex items-center gap-4 mb-8 pt-6 border-t border-gray-200">
                <Button variant="outline" className="flex items-center gap-2">
                  <Icon name="Heart" size={20} />
                  {selectedPost.likes} лайков
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Icon name="Share2" size={20} />
                  Поделиться
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Icon name="Bookmark" size={20} />
                  Сохранить
                </Button>
              </div>

              <Separator className="mb-8" />

              {/* Comments Section */}
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Комментарии ({selectedPost.comments.length})
                </h3>

                {/* Add Comment Form */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h4 className="font-semibold mb-4">Добавить комментарий</h4>
                  <div className="space-y-4">
                    <Input
                      placeholder="Ваше имя"
                      value={commentAuthor}
                      onChange={(e) => setCommentAuthor(e.target.value)}
                    />
                    <Textarea
                      placeholder="Поделитесь своими мыслями о статье..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      rows={4}
                    />
                    <Button 
                      onClick={() => handleAddComment(selectedPost.id)}
                      className="gradient-bg hover:opacity-90"
                    >
                      <Icon name="Send" size={16} className="mr-2" />
                      Опубликовать комментарий
                    </Button>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-6">
                  {selectedPost.comments.map((comment) => (
                    <div key={comment.id} className="comment-bubble">
                      <div className="flex items-start gap-3">
                        <Avatar className="w-10 h-10 flex-shrink-0">
                          <AvatarFallback className="gradient-bg text-white text-sm">
                            {comment.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-semibold text-gray-800">{comment.author}</span>
                            <span className="text-sm text-gray-500">{comment.date}</span>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                          <div className="flex items-center gap-4 mt-3">
                            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#FF6B6B]">
                              <Icon name="ThumbsUp" size={16} className="mr-1" />
                              Нравится
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#FF6B6B]">
                              <Icon name="MessageCircle" size={16} className="mr-1" />
                              Ответить
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedPost.comments.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    <Icon name="MessageCircle" size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Пока нет комментариев. Станьте первым!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}