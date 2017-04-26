const initialState = [
  {
    pictures: [
      'http://www.943knews.com/wp-content/uploads/2017/01/rain-2.jpg',
      'http://s1.thingpic.com/images/Ke/eAYEG1AUk1y5nBojdioXkyDS.jpeg',
      'http://www.vh1.com/news/wp-content/uploads/blog.vh1.com/2014/06/01-The-Notebook-Rain-Kiss.jpg',
      'https://previews.123rf.com/images/famveldman/famveldman1506/famveldman150600275/41607821-Little-girl-with-red-umbrella-playing-in-the-rain-Kids-play-outdoors-by-rainy-weather-in-fall-Autumn-Stock-Photo.jpg'
    ],
    answer: 'precipitation',
  },

  {
    pictures: [
        'http://i0.kym-cdn.com/entries/icons/facebook/000/005/939/Fap_Guy_Meme.jpg',
        'http://i2.kym-cdn.com/photos/images/newsfeed/000/402/523/5b7.png',
        'https://scontent.xx.fbcdn.net/v/t1.0-9/13876468_838685216275154_4338877723025030065_n.jpg?oh=f2d199a5ce6c66e1de350e8ee5f8b809&oe=59834066',
        'http://s2.quickmeme.com/img/4f/4fe2a2deae46341901f99c6db63559abf43f1b95b040f628da60cb5d2f668385.jpg'
    ],
    answer: 'masturbation',
  },


  {
    pictures: [
        'http://images.clipartpanda.com/proclamation-clipart-proclamation2.jpg',
        'http://www.civilwar.org/education/history/emancipation-150/eman-proc-doc.jpg',
        'https://www.scoilnet.ie/fileadmin/_processed_/csm_Proclomation-image-info_95873200a1.png',
        'http://image.shutterstock.com/display_pic_with_logo/307777/118317262/stock-vector-proclamation-on-parchment-118317262.jpg'
    ],
    answer: 'proclamation',
  },


  {
    pictures: [
        'https://i.ytimg.com/vi/QK0XxgGSai8/maxresdefault.jpg',
        'http://i.dailymail.co.uk/i/pix/2016/02/08/03/30FB8CC400000578-3436610-The_superstar_had_been_expected_to_deliver_a_political_statement-a-87_1454901654195.jpg',
        'http://www.everythingaction.com/wp-content/uploads/2016/08/power-rangers-kids-tv-movie103-g.jpg',
        'https://media.npr.org/assets/img/2016/02/09/beyonce-formation-still_wide-6c9543bceb5545134c58e220f38030bd0630d248.jpg?s=1400'
    ],
    answer: 'formation',
  },

  {
    pictures: [
        'https://s-media-cache-ak0.pinimg.com/originals/7b/34/bb/7b34bb21370b98a0bad901b743208fae.gif',
        'http://www.bestdegreeprograms.org/wp-content/uploads/2013/08/MATH-TEACHER-300x199.jpg',
        'https://www.mathsisfun.com/algebra/images/matrix-multiply-order.gif',
        'https://lh6.ggpht.com/0i8aaKoEuZfGq4DsrqYTa8L0HF_cc4nFhaChJRCOpBPncMdzkjex7TIRHBiTCMR9eBt2=w300'
    ],
    answer: 'multiplication',
  },

  {
    pictures: [
        'https://s-media-cache-ak0.pinimg.com/736x/e5/fd/cb/e5fdcbbff11e18cb69493b279944f164.jpg',
        'http://img.cinemablend.com/cb/1/c/f/0/0/7/1cf0075020009bb0cb690c6ef28d0e27ba343d10181008ef037b60fd640d0a86.jpg',
        'http://4.bp.blogspot.com/_xbfF84R7X-8/STg0maLohfI/AAAAAAAAApI/NZJ-LNlKRMk/s400/mutation.jpg',
        'http://biologypop.com/wp-content/uploads/2013/07/mutation.jpg'
    ],
    answer: 'mutation',
  },

  {
    pictures: [
        'http://orig07.deviantart.net/aa27/f/2014/065/a/3/giraffe_transformation___commission_by_carolzilla-d796hqj.png',
        'https://i.ytimg.com/vi/oHGrd6GhSs4/maxresdefault.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/2D_affine_transformation_matrix.svg/250px-2D_affine_transformation_matrix.svg.png',
        'https://zonefox.com/wp-content/uploads/2016/02/transformation.jpg'
    ],
    answer: 'transformation',
  },

  {
    pictures: [
        'http://www.observatoriobioetica.org/wp-content/uploads/2014/02/Fertilifdad-humana-420x300.jpg',
        'http://www.catholicworldreport.com/Content/Site140/Blog/2495fatherhoodc_00000001678.jpg',
        'https://lauraknowles.files.wordpress.com/2008/10/procreation1.jpg',
        'https://emefleur.files.wordpress.com/2010/08/procreation.jpg'
    ],
    answer: 'procreation',
  },

  {
    pictures: [
        'https://elearningindustry.com/wp-content/uploads/2015/11/gamification-vs-game-based-learning-two-different-things.jpg',
        'https://elearningindustry.com/wp-content/uploads/2015/04/Gamification-Engagement-Innovation.jpg',
        'http://www.talenthq.com/wp-content/uploads/2015/07/gamification.jpeg',
        'https://wispapp.com/wp-content/uploads/Engagement-through-gamification.jpg'
    ],
    answer: 'gamification',
  },

  {
    pictures: [
        'http://www.homeandlearn.co.uk/csharp/images/variables/Button_String_Concat2.gif',
        'http://1.bp.blogspot.com/-S-wOUjRIKTc/VWR6TVyJPvI/AAAAAAAACzg/-nDp5Fj17cE/s1600/String%2Bconcatenation%2Bin%2BJava.png',
        'https://i.stack.imgur.com/oQm7f.png',
        'http://vignette1.wikia.nocookie.net/choicescriptdev/images/f/f8/Concatenation.png/revision/latest?cb=20120917155200'
    ],
    answer: 'concatenation',
  },

  {
    pictures: [
        'http://media.hollywood.com/images/638x425/1793530.jpg',
        'http://www.hrnext.com/wp-content/uploads/2016/09/Retaliation-now-has-a-broader-definition-according-to-the-EEOC_16001408_40036454_0_14037755_500-500x321.jpg',
        'http://www.employmentlawyersflorida.com/wp-content/uploads/2012/01/Retaliation-fight-back-14692151.jpg',
        'http://images.amcnetworks.com/ifc.com/wp-content/uploads/2012/04/042412-gi-joe.jpg'
    ],
    answer: 'retaliation',
  },

  {
    pictures: [
        'https://purplemotes.net/wp-content/uploads/2014/08/mocking-stork-gesture-450x391.jpg',
        'http://www.netzonesolutions.com/wp-content/uploads/2016/04/pen-test.png',
        'http://heahea.org/img/1721-Penetration_bike.jpg',
        'https://thumbs.dreamstime.com/z/rude-hand-gesture-isolated-white-showing-penetrating-sex-fingers-formal-long-sleeved-shirt-48505996.jpg'
    ],
    answer: 'penetration',
  },

    {
    pictures: [
        'https://www.houseplans.com/static/images/plan/modify/step3.png',
        'http://palmscarshop.com/wp-content/uploads/2015/08/pics_for___car_modification_wallpaper__36665.jpg',
        'https://gmoawareness.files.wordpress.com/2011/04/gmo-tomato.jpg?w=584',
        'http://www.earthtimes.org/nsimages/files/genetic_engineering_gm_encyclopaedia.jpg'
    ],
    answer: 'modification',
  },


]
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}

export default reducer
