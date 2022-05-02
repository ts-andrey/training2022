import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss'],
})
export class PlaceListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  constructor(private router: Router) {}

  placesCamping = [
    {
      placeName: 'Mount Cook National Park',
      placeLocation: 'New Zealand',
      placeImg:
        'https://www.newzealand.com/assets/Tourism-NZ/Christchurch-Canterbury/9aa11093e3/img-1536989144-436-6533-p-4AE01862-F0F6-45CC-A4A8B61D309D3D12-2544003__aWxvdmVrZWxseQo_FocalPointCropWzQyMCw5NjAsNTMsNTAsNzUsImpwZyIsNjUsMi41XQ.jpg',
      placeDescription:
        'You can’t talk about camping without waxing lyrical about New Zealand’s out-of-this-world landscapes. Mount Cook (or Aoraki to the Maori) is the country’s highest mountain and the entire surrounding rugged region is the South Island’s finest outdoor playground. Views from the campgrounds here are simply staggering.',
      placeRegisterDate: '20.07.2021',
    },
    {
      placeName: 'Devon',
      placeLocation: 'England',
      placeImg:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/d5/devon.jpg?w=700&h=500&s=1',
      placeDescription:
        "The southwest of England feels a million miles from the rest of the UK. The campsites on Dartmoor and Exmoor are fantastic places to pitch a tent, while you'll find spots with unbeatable vistas along the craggy cliffs that sweep down to the Atlantic on the north Devon coast. Come in autumn, when you can watch a huge red sun dip slowly over the horizon.",
      placeRegisterDate: '30.07.2021',
    },
    {
      placeName: 'Loch Lomond & The Trossachs',
      placeLocation: 'Scotland',
      placeImg:
        'https://www.nationalparks.uk/app/uploads/2020/09/Hero_Loch_Lomond-1800x1080.jpg',
      placeDescription:
        "The scattered peaks, valleys and villages of the Trossachs – often called the Highlands in miniature – make an incredibly scenic backdrop for a camping trip. Amid these romantic lochs and glens you'll find everything from sprawling caravan parks to remote wild camping spots; be sure to read the Outdoor Access Code before you go.",
      placeRegisterDate: '17.07.2021',
    },
    {
      placeName: 'The Alps',
      placeLocation: 'France',
      placeImg:
        'https://www.savoredjourneys.com/wp-content/uploads/2017/07/chamonix-france.jpg',
      placeDescription:
        "The dominion of skiers in the winter months, the Alps transform as the snow thaws. Once the balmy spring weather arrives, so do hikers and campers. You'll find beautifully fresh alpine air and quaint villages nestled in the foothills. It's a magical place to camp, made all the more special by the glittering night sky above.",
      placeRegisterDate: '22.07.2021',
    },
  ];

  placesRelax = [
    {
      placeName: 'Molokai, Hawaii',
      placeLocation: 'USA (Hawaii state)',
      placeImg:
        'https://www.myglobalviewpoint.com/wp-content/uploads/2019/06/Molokai-Hawaii-Travel-Guide.jpg',
      placeDescription:
        'Molokai is only nine miles away from the popular resorts on West Maui, but it feels like worlds away from all those tourists crowds. On this less-visited isle, you won’t find lively nightlife or the bright lights of the big city, but you might just find a beach all to yourself for letting all that stress melt away. Three-mile beach, officially known as Papohaku, sits at the island’s western end, is especially ideal. One of the largest stretches of white sands in all of Hawaii, on a clear day you can even look over to Oahu across the channel.',
      placeRegisterDate: '26.04.2022',
    },
    {
      placeName: 'Maldives',
      placeLocation: 'Asia',
      placeImg:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/47/d1/98/exterior.jpg?w=900&h=-1&s=1',
      placeDescription:
        'The Maldives is home to hundreds of perfect tropical islands, each one more breathtaking than the last. Enjoy countless picture-perfect white sand beaches framed by dreamy aquamarine waters of the Indian Ocean and a wealth of luxurious spas to choose from in this country that was named the top spa destination on the planet at the World Spa Awards. No matter where you stay, you’re sure to be close to all sorts of pampering treatments.',
      placeRegisterDate: '21.04.2022',
    },
    {
      placeName: 'Whitsunday Island',
      placeLocation: 'Australia',
      placeImg:
        'https://royalyachtinternational.com/wp-content/uploads/2019/08/Whitsunday-Islands.jpg',
      placeDescription:
        'The Whitsundays are one of Australia’s most breathtaking attractions, made up of 74 Island Wonders along Queensland’s tropical coast in the heart of the Great Barrier Reef. Whitsunday Island is home to one of the world’s most beautiful secluded beaches, Whitehaven. Consistently ranked among the top 10 beaches on the planet with its white silica sand and striking azure waters, it’s almost too good to be true for anyone looking for the ultimate in relaxation and opportunities to enjoy snorkeling among abundant marine life, including more than 1,600 species of tropical fish, turtles, sharks, dolphins, rays and giant clams.',
      placeRegisterDate: '23.04.2022',
    },
  ];

  placesFood = [
    {
      placeName: 'Noma',
      placeLocation: 'Copenhagen, Denmark',
      placeImg:
        'https://media.admagazine.ru/photos/61409048370ed82de4b40ad7/16:9/w_1280,c_limit/r_hjortshoj_-_noma-172_dp_original.jpg',
      placeDescription:
        'One of the most coveted restaurants on the planet, Noma and its founder, René Redzepi, are known for creating New Nordic Cuisine and inspiring an entire generation of chefs the world over. Noma was voted The World’s Best Restaurant in 2010, 2011, 2012 and 2014, before it closed in 2016 and moved to a new location in 2018. Now back on top form with a seasonal dining structure, Noma 2.0 is wowing diners again with its endlessly innovative tasting menus.',
      placeRegisterDate: '14.02.2021',
    },
    {
      placeName: 'Asador Etxebarri',
      placeLocation: 'Atxondo, Spain',
      placeImg:
        'http://londoneater.com/wp-content/uploads/2017/02/Extebarri-4.jpg',
      placeDescription:
        'In the lush foothills of the Spanish Basque Country, Asador Etxebarri has been housed in the same rustic stone building since the 1990s. With sprawling views of mountains and grazing cattle from its terrace (where the welcome snacks are served), the restaurant can claim to be at one with history and nature.',
      placeRegisterDate: '24.02.2021',
    },
    {
      placeName: 'Central',
      placeLocation: 'Lima, Peru',
      placeImg:
        'https://starwinelist.com/storage/images/venue/763/980x541/bqrFFlzCuFY3BonzB3LFxoPNXrOW8ULRSHhz3iF4.jpeg?signature=83e06031c3326463cdddd0e8039a92ec57e7388284f322873f1a04581551e37b',
      placeDescription:
        'Chefs Virgilio Martínez and Pía León’s flagship restaurant, Central, is an ode to Peru in all forms. The dishes celebrate the unique landscapes, history and traditions of their homeland by using an abundance of locally sourced produce.',
      placeRegisterDate: '17.02.2021',
    },
    {
      placeName: 'The Chairman',
      placeLocation: 'Hong Kong, China',
      placeImg:
        'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_450,h_300/https://danielfooddiary.com/wp-content/uploads/2013/12/thechairman7.jpg',
      placeDescription:
        'Get ready to be transported through 2,000 years of Cantonese culinary history through the dining experience. The restaurant’s cooking style is built on tradition: the seafood is sourced by local fishermen, the sauces are created from scratch in the kitchen and The Chairman’s small farm in Sheung Shui is responsible for curing the preserved meats and even the salted eggs. The restaurant’s philosophy, ‘simple cooking will rule’, shines through every dish, creating a culinary experience like no other.',
      placeRegisterDate: '04.02.2021',
    },
  ];

  placesTravel = [
    {
      placeName: 'Machu Picchu',
      placeLocation: 'Peru',
      placeImg:
        'https://www.peruforless.com/blog/wp-content/uploads/2020/05/machu-picchu-ruins.jpg',
      placeDescription:
        'Located high in the Andes mountains of Peru, Machu Picchu is now believed to have been a sacred royal retreat for the Incan rulers. Built in the 15th century AD and abandoned less than a 100 years later, the remote site continues to amaze with its perfectly joined, mortarless, intricate stonework. Huge multi-ton blocks of stone are perfectly joined with each other, without the use of mortar or cement.',
      placeRegisterDate: '31.04.2022',
    },
    {
      placeName: 'The Grand Canyon',
      placeLocation: 'Arizona',
      placeImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Canyon_River_Tree_%28165872763%29.jpeg/1200px-Canyon_River_Tree_%28165872763%29.jpeg',
      placeDescription:
        "This incredible sight, one of the seven natural wonders of the world, is in the U.S. state of Arizona. It's one of those beautiful places for which photos or video just don't do it justice-its sheer size and scope is hard to comprehend.With geology formed over the past two billion years, yes billion, the 277 mile-long canyon itself is believed to have been started around five to six million years ago. It was formed by the flow of the Colorado River, which still flows through it and continues to erode the geology along its course. The Grand Canyon is up to 18 miles wide in places and up to a mile deep. Imagine standing on the edge, looking down a sheer rock wall almost a mile to the river below.",
      placeRegisterDate: '20.04.2022',
    },
    {
      placeName: 'Rome',
      placeLocation: 'Italy',
      placeImg:
        'https://www.thediaryofanomad.com/wp-content/w3-webp/uploads/2020/11/rome-for-3-days-in-rome-itinerary-vatican-dome-view.jpgw3.webp',
      placeDescription:
        "The Eternal City is more like a giant, living museum. Visitors are immersed in and surrounded by thousands of years of history. It's a relatively compact city, and a three-day itinerary gets you to the minimum number of must-see places. These must-see sites for any visitor include the Colosseum and adjacent Roman Forum; the Pantheon; and Vatican City, a separate country in the middle of central Rome.Take some time to explore the outskirts of Rome, too. Consider a hike along a tomb-lined section of the Appian Way, the ancient Roman superhighway, and a visit to one of the aqueduct ruins outside the city. If you feel like hitting the beach after all your exploring, Rome has a wonderful assortment of beach towns just a short drive away on the Lazio Coast. Escape the heat, hustle, and bustle of the city to bathe in the cool waters of the Tyrrhenian Sea.",
      placeRegisterDate: '30.04.2022',
    },
    {
      placeName: 'Maui',
      placeLocation: 'Hawaii',
      placeImg:
        'https://imageio.forbes.com/specials-images/imageserve/6201447a12e8d97a88d897ea/Kaanapali-Beach-from-Black-Rock--Maui--Hawaii/960x0.jpg?fit=bounds&format=jpg&width=960',
      placeDescription:
        "This Hawaiian island offers a wide range of experiences for visitors. You can surf, enjoy a meal on the beach at a five-star luxury resort in Wailea, ride a horse across a dormant volcano in Haleakala National Park, or hike through a rainforest in the West Maui Mountains. The natural scenery is amazing-it's truly one of the most beautiful islands in the world. When it comes to accommodation, there is something for everyone here, from rustic hippie bungalow bed and breakfasts to five-star luxury resort hotels. Wailea has all the luxury resorts-it's like the beachfront Beverly Hills of Maui. If you're staying here, be sure to venture out and spend some time in Kihei, where the locals hang out.",
      placeRegisterDate: '19.04.2022',
    },
  ];

  placesHeal = [
    {
      placeName: 'Ganges River',
      placeLocation: 'Varanasi, India',
      placeImg:
        'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-01/220114-Gangasagar-Mela-mb-0803-2dc9d8.jpg',
      placeDescription:
        'When it comes to natural healing, few places are more renowned than India’s Ganges River. Hindus throughout the country make the journey to Varanasi, on the banks of the Ganges, to spread the ashes of their deceased relatives, believing the river will transport their souls to heaven and help them escape the endless cycle of rebirth.',
      placeRegisterDate: '23.04.2019',
    },
    {
      placeName: 'Blue Lagoon',
      placeLocation: 'Grindavík, Iceland',
      placeImg:
        'https://media-cdn.tripadvisor.com/media/photo-s/12/4f/e1/b6/blue-lagoon.jpg',
      placeDescription:
        'Renowned for its mineral-rich geothermal seawater, Iceland’s Blue Lagoon is natural healing at its finest. The steaming blue lagoon, set within a striking volcanic landscape, promises to rejuvenate your skin and relax your body. Premium entrance to the outdoor spa includes a cozy bathrobe, slippers, and two mud masks, which you apply to your skin in the water.',
      placeRegisterDate: '23.04.2019',
    },
    {
      placeName: 'Camino de Santiago',
      placeLocation: 'Various Routes Throughout Europe',
      placeImg:
        'https://www.easytravel.guru/storage/app/media/uploaded-files/7D65CMSZY6PUL33AFSFBITK34U.jpg',
      placeDescription:
        'Every year, hundreds of thousands of people from around the world embark on “the Camino” — a Catholic pilgrimage via a network of trails that culminates in the Spanish city of Santiago de Compostela. This is where the martyr Saint James is said to be buried. The most popular route, the Camino Frances, starts at St. Jean Pied-de-Port in France and takes hikers along 500 miles of small towns and larger cities (including Pamplona and Leon), and participants stay in pilgrim accommodations along the way.',
      placeRegisterDate: '23.04.2019',
    },
    {
      placeName: 'Healing Forests',
      placeLocation: 'Japan & Elsewhere',
      placeImg:
        'https://www.wabimoss.com/wp-content/uploads/2016/07/forest.jpg',
      placeDescription:
        'Ever hear of forest bathing? The trendy wellness ritual involves taking a meditative nature walk in the woods to experience the scientifically proven natural healing benefits of the outdoors, including immune system stimulation and improved self-esteem.',
      placeRegisterDate: '23.04.2019',
    },
    {
      placeName: 'Medicinal Mayan Gardens',
      placeLocation: 'Near San Antonio, Belize',
      placeImg:
        'https://belizebotanic.org/wp-content/uploads/2019/06/medicine_trailsign.jpg',
      placeDescription:
        'Natural healing can be found around every corner in Belize, from the kitchen gardens at many hotels to outdoor yoga classes hosted on beaches and in jungles. But one of the best places to check out this unique part of Belizean culture is by paying a visit to the Garcia Sisters, the 13th generation in a family of Mayan natural healers who offer tours of their medicinal garden.',
      placeRegisterDate: '23.04.2019',
    },
  ];

  places = [...this.placesRelax];

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (ev.url.split('=')[1] === 'camping') {
          this.places = [...this.placesCamping];
        } else if (ev.url.split('=')[1] === 'relax') {
          this.places = [...this.placesRelax];
        } else if (ev.url.split('=')[1] === 'food') {
          this.places = [...this.placesFood];
        } else if (ev.url.split('=')[1] === 'travel') {
          this.places = [...this.placesTravel];
        } else if (ev.url.split('=')[1] === 'heal') {
          this.places = [...this.placesHeal];
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
