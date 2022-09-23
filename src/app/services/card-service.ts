import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards = [
    {
      firstName: 'Jay',
      lastName: 'Cuttin',
      email: 'j@lo.net',
      aboutMe: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.  Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      topTopics: 'Sailing',
      proPict: '../../../assets/images/ProfilePic1.jpg'
    },
    {
      firstName: 'Powell',
      lastName: 'Aubray',
      email: 'paubray1@smh.com.au',
      aboutMe: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
      topTopics: 'Home-Design',
      proPict: '../../../assets/images/ProfilePic2.jpg'
    },
    {
      firstName: 'Amanda',
      lastName: 'Cottee',
      email: 'acottee2@studiopress.com',
      aboutMe: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.  Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      topTopics: 'Naturalist',
      proPict: '../../../assets/images/ProfilePic3.jpg'
    },
    {
      firstName: 'Granger',
      lastName: 'Macenzy',
      email: 'gmacenzy3@so-net.ne.jp',
      aboutMe: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien',
      topTopics: 'Exercise',
      proPict: '../../../assets/images/ProfilePic4.jpg'
    },
    {
      firstName: 'Cele',
      lastName: 'Sillitoe',
      email: 'csillitoe4@skype.com',
      aboutMe: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      topTopics: 'Jogging',
      proPict: '../../../assets/images/ProfilePic5.jpg'
    },
    {
      firstName: 'Cinderella',
      lastName: 'Staton',
      email: 'cstaton5@va.gov',
      aboutMe: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      topTopics: 'Naturalist',
      proPict: '../../../assets/images/ProfilePic6.jpg'
    },
    {
      firstName: 'Yolane',
      lastName: 'Trumper',
      email: 'ytrumper6@fda.gov',
      aboutMe: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      topTopics: 'Fine-Arts',
      proPict: '../../../assets/images/ProfilePic7.jpg'
    },
    {
      firstName: 'Erena',
      lastName: 'Ravilus',
      email: 'eravilus7@scientificamerican.com',
      aboutMe: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      topTopics: 'Cosplay',
      proPict: '../../../assets/images/ProfilePic8.jpg'
    },
    {
      firstName: 'Ariana',
      lastName: 'Kondratenko',
      email: 'akondratenko8@arstechnica.com	',
      aboutMe: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      topTopics: 'Cosplay',
      proPict: '../../../assets/images/ProfilePic9.jpg'
    },
    {
      firstName: 'Mella',
      lastName: 'Flowitt',
      email: 'mflowitt9@paginegialle.it',
      aboutMe: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
      topTopics: 'Weight-lifting',
      proPict: '../../../assets/images/ProfilePic10.jpg'
    }
  ]

  onShowCardClicked = new EventEmitter<{
    firstName: string,
    lastName: string,
    email: string,
    aboutMe: string,
    topTopics: string,
    proPict: string
  }>();

  showCardModal(card: {
    firstName: string,
    lastName: string,
    email: string,
    aboutMe: string,
    topTopics: string,
    proPict: string
  }) {
    this.onShowCardClicked.emit(card);
  }
}
