import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Leaf, Flower, Trees, Sun, Star, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Сообщение отправлено!",
      description: "Спасибо! Мы скоро свяжемся с вами.",
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&auto=format&fit=crop", alt: "Lush garden path" },
    { src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&auto=format&fit=crop", alt: "Garden with waterfall" },
    { src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&auto=format&fit=crop", alt: "Mountain landscape" },
    { src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&auto=format&fit=crop", alt: "Pine trees in a garden" },
    { src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop", alt: "Sunlight through leaves" },
    { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop", alt: "Scenic mountain view" },
  ];

  const testimonials = [
    {
      quote: "Команда good garden превзошла все наши ожидания. Наш сад теперь — наше любимое место в доме. Профессионализм на высшем уровне!",
      name: "Анна и Виктор",
      rating: 5,
    },
    {
      quote: "Потрясающий дизайн и внимание к деталям. Весь процесс, от концепции до реализации, прошел гладко и в срок. Очень рекомендую!",
      name: "Елена С.",
      rating: 5,
    },
    {
      quote: "Спасибо за прекрасную работу! Наш задний двор превратился в настоящий райский уголок. Дети в восторге от новой лужайки.",
      name: "Семья Ивановых",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex items-center">
            <Leaf className="h-6 w-6 mr-2 text-green-600" />
            <span className="font-bold text-lg">good garden</span>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium ml-auto">
            <a href="#services" className="transition-colors hover:text-foreground/80 text-foreground/60">Услуги</a>
            <a href="#gallery" className="transition-colors hover:text-foreground/80 text-foreground/60">Галерея</a>
            <a href="#testimonials" className="transition-colors hover:text-foreground/80 text-foreground/60">Отзывы</a>
            <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Контакты</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&auto=format&fit=crop)" }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Превращаем ваш участок в оазис</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
              Мы создаем красивые, экологичные и функциональные ландшафты, которые вы полюбите.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <a href="#contact">Получить бесплатную консультацию</a>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Наши услуги</h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
              От проектирования до реализации — мы предлагаем полный спектр услуг по озеленению.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transition-transform duration-300 hover:scale-105 flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Flower className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Ландшафтный дизайн</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 text-muted-foreground">
                  <p className="mb-4">Разработка уникальной концепции вашего сада, сочетающей красоту и функциональность.</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>3D-визуализация проекта</li>
                    <li>Подбор растений под ваш климат</li>
                    <li>Проектирование освещения и полива</li>
                    <li>Создание зон отдыха и барбекю</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-transform duration-300 hover:scale-105 flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Trees className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Посадка и установка</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 text-muted-foreground">
                  <p className="mb-4">Качественное воплощение проекта в жизнь с использованием лучших материалов и растений.</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Посадка деревьев и кустарников</li>
                    <li>Устройство рулонных и посевных газонов</li>
                    <li>Монтаж дорожек, патио и малых форм</li>
                    <li>Установка систем автополива</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-transform duration-300 hover:scale-105 flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Sun className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Уход за садом</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 text-muted-foreground">
                   <p className="mb-4">Комплексный уход, который обеспечит здоровье и великолепие вашего сада на долгие годы.</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Сезонная обрезка и формирование крон</li>
                    <li>Борьба с вредителями и болезнями</li>
                    <li>Подкормка и аэрация газона</li>
                    <li>Подготовка сада к зиме и весне</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Наши работы</h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
              Взгляните на некоторые из прекрасных садов, которые мы создали.
            </p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg cursor-pointer" onClick={() => handleImageClick(index)}>
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover aspect-square transition-transform duration-300 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Что говорят наши клиенты</h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
              Мы гордимся доверием, которое нам оказывают.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="flex flex-col transition-transform duration-300 hover:scale-105">
                  <CardContent className="pt-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground italic flex-1">"{testimonial.quote}"</blockquote>
                    <p className="mt-4 font-semibold text-right">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-secondary">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Свяжитесь с нами</h2>
            <p className="mt-4 text-center text-muted-foreground">
              Готовы начать свой проект? Напишите нам сегодня.
            </p>
            <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-x-12 gap-y-4">
              <a href="mailto:contact@good.garden" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Mail className="h-5 w-5" />
                <span>contact@good.garden</span>
              </a>
              <a href="tel:+71234567890" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Phone className="h-5 w-5" />
                <span>+7 (123) 456-78-90</span>
              </a>
            </div>
            <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
              <Input
                placeholder="Ваше имя"
                className="h-12 text-base"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Ваш Email"
                className="h-12 text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Textarea
                placeholder="Ваше сообщение"
                className="min-h-[150px] text-base"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button type="submit" className="w-full h-12 text-lg">Отправить сообщение</Button>
            </form>
          </div>
        </section>

        <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
          <DialogContent className="w-auto max-w-[90vw] p-0 bg-transparent border-none shadow-none">
            <Carousel
              opts={{
                startIndex: selectedImageIndex,
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="flex justify-center items-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-auto h-auto max-h-[85vh] object-contain rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </DialogContent>
        </Dialog>
      </main>

      {/* Footer */}
      <footer className="bg-muted">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} good garden. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;
