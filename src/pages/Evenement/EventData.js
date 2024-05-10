import speaker from "../../Images/speaker.jpg";
import event from "../../Images/event.jpg";
const eventsData = [
  {
    date: ["01", "28"],
    title: "Yoga pour la santé mentale",
    description:
      "Rejoignez-nous pour une séance de yoga spécialement conçue pour améliorer la santé mentale et le bien-être général. Apprenez des techniques de respiration et de méditation pour réduire le stress et l'anxiété.",
    contenu:
      "Séance de yoga guidée avec des postures adaptées pour tous les niveaux.",
    speakers: [
      "Marie Dupont",
      "Jean-Pierre Leclerc",
      "Dr. Sophie Martin",
      "Chef Antoine Blanc",
    ],
    speakerImgSrc: speaker,
    ImgSrc: event,
    heure: "8h PM",
    place: "Centre esthétique",
  },
  {
    date: ["03", "15"],
    title: "Alimentation équilibrée pour une meilleure santé",
    description:
      "Découvrez comment adopter une alimentation équilibrée pour favoriser votre santé et votre bien-être. Des experts en nutrition partageront des conseils pratiques pour une alimentation saine et délicieuse.",
    contenu:
      "Présentation sur les principes de base de la nutrition et dégustation d'aliments sains.",
    speakers: ["Dr. Sophie Martin", "Chef Antoine Blanc"],
    speakerImgSrc: speaker,
    ImgSrc: event,
    heure: "8h PM",
    place: "Centre esthétique",
  },
  {
    date: ["05", "10"],
    title: "Méditation guidée pour la relaxation",
    description:
      "Prenez du temps pour vous-même et découvrez les bienfaits de la méditation pour la relaxation et le calme intérieur. Rejoignez-nous pour une séance de méditation guidée qui vous aidera à vous détendre et à vous recentrer.",
    contenu:
      "Séance de méditation guidée avec des techniques de visualisation et de relaxation musculaire.",
    speakers: ["Alexandre Rousseau", "Sophie Moreau"],
    speakerImgSrc: speaker,
    ImgSrc: event,
    heure: "8h PM",
    place: "Centre esthétique",
  },
  {
    date: ["07", "20"],
    title: "Conférence sur le sommeil réparateur",
    description:
      "Apprenez l'importance du sommeil pour la santé et le bien-être, ainsi que des stratégies pour améliorer la qualité de votre sommeil. Des spécialistes du sommeil partageront des conseils pratiques pour mieux dormir et se réveiller rafraîchi.",
    contenu:
      "Présentation sur les troubles du sommeil et les habitudes de sommeil saines.",
    speakers: ["Dr. Thomas Lefevre", "Sophie Martin"],
    speakerImgSrc: speaker,
    ImgSrc: event,
    heure: "8h PM",
    place: "Centre esthétique",
  },
  {
    date: ["09", "05"],
    title: "Atelier de gestion du stress",
    description:
      "Explorez des techniques efficaces pour gérer le stress au quotidien et favoriser un état de bien-être mental. Cet atelier interactif vous fournira des outils pratiques pour réduire le stress et cultiver la résilience émotionnelle.",
    contenu:
      "Exercices de relaxation, de pleine conscience et de gestion des émotions.",
    speakers: ["Sophie Moreau", "Jean-Pierre Leclerc"],
    speakerImgSrc: speaker,
    ImgSrc: event,
    heure: "8h PM",
    place: "Centre esthétique",
  },
];

export default eventsData;
