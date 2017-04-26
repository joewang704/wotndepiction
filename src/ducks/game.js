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
        'http://weknowmemes.com/wp-content/uploads/2012/01/the-shit-i-put-up-with-240x180.jpg',
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



  {
    pictures: [
        'https://images.trvl-media.com/media/content/expus/graphics/launch/package1320x742.jpg',
        'http://www.krbe.com/wp-content/uploads/sites/115/2016/07/vacay.jpg',
        'https://www.jetblue.com/img/vacations/travelstyles/AllInclusive/All_Inc_960x420.jpg',
        'https://expertbeacon.com/sites/default/files/spend_your_money_wisely_while_on_vacation_and_stay_on_budget.jpg'
    ],
    answer: 'vacation',
  },

  {
    pictures: [
        'https://cache-graphicslib.viator.com/graphicslib/media/a9/mengdingshan-tea-plantation-photo_2147241-fit468x296.jpg',
        'http://www.oakalleyplantation.com/sites/drupal-29536-63959-171825.cloudwaysapps.com/files/images/oak_alley_official_sexton_image300g_med.jpg',
        'https://www.walldevil.com/wallpapers/w18/plantation-at-sunset.jpg',
        'http://news.stanford.edu/news/2012/october/images/palm_news.jpg'
    ],
    answer: 'plantation',
  },

  {
    pictures: [
        'https://image.freepik.com/free-icon/amplified-speaker_318-39711.jpg',
        'http://www.michaelsharris.com/electronics/images/amplification-of-wave.jpg',
        'https://thanetennison.files.wordpress.com/2011/11/amplification.jpg',
        'http://media.salon.com/2014/02/megaphone.jpg'
    ],
    answer: 'amplification',
  },

  {
    pictures: [
        'http://www.hydroponics.co.uk/wp/wp-content/uploads/2015/09/Seed-Germination-blog.jpg',
        'http://www.growweedeasy.com/sites/growweedeasy.com/files/many-cannabis-seeds-sprouting.jpg',
        'http://zion420.com/wp-content/uploads/2016/11/how-to-grow-marijuana-1-germination-seeding-820x340.jpg',
        'http://cdn.biologydiscussion.com/wp-content/uploads/2014/07/clip_image0165.jpg'
    ],
    answer: 'germination',
  },


  {
    pictures: [
        'https://pbs.twimg.com/profile_images/378800000386057424/700b2ca43fd3ddec52c8adb98e8f7f8d_400x400.jpeg',
        'https://markjamnik.com/wp-content/uploads/2014/11/determination-to-succeed.jpg',
        'https://img.clipartfest.com/1456f3f7fd31aeee512d0e51cba4ffdc_determination-determination_500-500.jpeg',
        'http://3.bp.blogspot.com/-RAervsQ5zXE/VPiQD1lR3gI/AAAAAAAAaq4/zaqf_isJznI/s1600/strengths.jpg'
    ],
    answer: 'determination',
  },


  {
    pictures: [
        'http://fcdn.mtbr.com/attachments/off-camber-off-topic/822157d1375674539-who-anthony-weiner-carlos-danger-guy-all-your-politicians-like-him-dog-dunce-cap-hp.jpg',
        'https://i.kinja-img.com/gawker-media/image/upload/s--K8TS4Jn_--/c_fit,fl_progressive,q_80,w_320/hkqlprr2yuuzuwkqas73.jpg',
        'https://i.ytimg.com/vi/l2YBd0SmSzw/hqdefault.jpg',
        'https://img.memesuper.com/992633461fae9d763daf448bd40dacca_attorneys-attending-the-school-dunce-cap-memes_283-424.jpeg'
    ],
    answer: 'humiliation',
  },


  {
    pictures: [
        'https://i.ytimg.com/vi/yc160iZYUvk/maxresdefault.jpg',
        'https://userscontent2.emaze.com/images/3b9a1598-4a85-4f52-9624-63a732dd2cd7/42149e615f089c4b0a51ad3d42cdecce.jpeg',
        'http://kingofwallpapers.com/reflection/reflection-008.jpg',
        'https://a.dilcdn.com/bl/wp-content/uploads/sites/25/2015/02/Mulan-Reflection-6.jpg'
    ],
    answer: 'reflection',
  },


  {
    pictures: [
        'https://img.ifcdn.com/images/ff1cb144a881bcbace0a0c5899228a23a1631be84852440745ca064e9b230de1_1.jpg',
        'http://tobyneal.net/wp-content/uploads/2016/07/procrastinate.jpg',
        'http://memeguy.com/photos/images/sweet-sweet-procrastination-101750.jpg',
        'https://img.memesuper.com/1b2811f798c02f8b84858778b8f240f1_5-productivity-tools-to-beat-procrastination-caelan-huntress-procrastination-meme-tumblr_500-355.png'
    ],
    answer: 'procrastination',
  },


  {
    pictures: [
        'http://strausfamilycreamery.com/images/uploads/files/photo-gallery-pasteurization.png',
        'http://www.safeeggs.com/img/pasteurized-eggs-3.png',
        'https://i.ytimg.com/vi/ROh3OpBCOOw/maxresdefault.jpg',
        'http://l7.alamy.com/zooms/49edf514c525496e843e4dd3e9e11afd/food-milk-milk-supply-for-copenhagen-denmark-circa-1897-pasteurization-bhd5n7.jpg'
    ],
    answer: 'pasteurization',
  },


  {
    pictures: [
        'http://a57.foxnews.com/images.foxnews.com/content/fox-news/politics/2017/02/21/new-immigration-policies-draw-both-praise-and-alarm/_jcr_content/par/featured_image_0/media-0.img.jpg/876/493/1487707640860.jpg?ve=1&tl=1',
        'http://www.newyorker.com/wp-content/uploads/2016/04/topics-immigration-election-2016-320-240.jpg',
        'https://maxcdn1.laprogressive.com/wp-content/uploads/2016/08/trump-immigration-721.jpg',
        'http://www.agg.com/files/FirmService/8aa3957f-8416-4a80-b844-9400aa696ecc/Presentation/ceServiceImage/Immigration-banner.jpg'
    ],
    answer: 'immigration',
  },


  {
    pictures: [
        'https://withmeagrepowers.files.wordpress.com/2016/08/creation.jpg',
        'http://www.supergrove.com/wp-content/uploads/2017/03/meme-creation-8-the-imgur-meme-generator.jpg',
        'https://www.stpeterslist.com/wp-content/uploads/2012/11/Universe-Large.jpeg',
        'https://stupidbadmemes.files.wordpress.com/2013/08/doesnt-understand-evolution.jpg'
    ],
    answer: 'creation',
  },


  {
    pictures: [
        'http://users.design.ucla.edu/~cariesta/3DCourseNotes/assets/images/saturation_target.jpg',
        'http://embed.wistia.com/deliveries/58ef21e783004f6c1b98737789a9b84d8d2bf2be.jpg',
        'http://deepskycolors.com/astro/misc/color_saturation.jpg',
        'https://aos.iacpublishinglabs.com/question/aq/700px-394px/difference-between-unsaturated-saturated-supersaturated-solutions_74faf2352e1acc10.jpg?domain=cx.aos.ask.com'
    ],
    answer: 'saturation',
  },


  {
    pictures: [
        'http://www.internationallovescout.com/images/stories/2015/crazy-mardi-gras-girl.jpg',
        'https://angelsbark.files.wordpress.com/2015/10/celebration-horn.gif',
        'https://s-media-cache-ak0.pinimg.com/736x/a4/92/08/a49208a23704b3c007cd397e73729c69.jpg',
        'http://runt-of-the-web.com/wordpress/wp-content/uploads/2015/02/mardi-gras-tricks-no-shirt.jpg'
    ],
    answer: 'celebration',
  },


  {
    pictures: [
        'http://www.keyserminneapolisimmigrationlawyer.com/wp-content/uploads/2016/07/How-to-Become-a-Citizen-Requirements-for-Naturalization.jpg',
        'http://www.steelekaplanlaw.com/wp-content/uploads/2013/01/citizenship.jpg',
        'http://immigrationhadley.com/wp-content/uploads/2016/02/naturalization-ceremony.jpg',
        'http://a.abcnews.com/images/Politics/GTY-green-card-2-jt-170128_12x5_1600.jpg'
    ],
    answer: 'naturalization',
  },



  {
    pictures: [
        'http://www.quickmeme.com/img/64/6487b914be5648760f5b188b9a2332b4aabf398711b1ef7eff3c3a028f852c48.jpg',
        'http://cdn0.dailydot.com/cache/09/17/0917dd6475c5ee72d5a8cf7ed994a355.jpg',
        'http://www.critical-theory.com/wp-content/uploads/2013/02/RHIZOMATIC-POLITICS-MEME1.jpg',
        'http://dreamicus.com/data/vegetation/vegetation-04.jpg'
    ],
    answer: 'vegetation',
  },


  {
    pictures: [
        'https://s-media-cache-ak0.pinimg.com/originals/49/70/ff/4970ff449d72d65dcd9019f956138419.jpg',
        'https://cdn2.omidoo.com/sites/default/files/imagecache/full_width/images/bydate/20130416/shutterstock83158471.jpg',
        'http://i2.kym-cdn.com/photos/images/facebook/000/963/848/53f.jpg',
        'https://acewebcontent.azureedge.net/blogs/blog-fitnovatives-042915.jpg'
    ],
    answer: 'hydration',
  },


  {
    pictures: [
        'https://memecrunch.com/meme/91TT/suspicious-cat/image.png?w=500&c=1',
        'http://s2.quickmeme.com/img/92/9296d7d0a802892654ca3da86830b7c89be3e8cd287e28e5302df39c60fb584f.jpg',
        'http://1.bp.blogspot.com/-XpUw3dO309g/VW4wVKYQuFI/AAAAAAAAC_I/KF-yJBZtWhw/s1600/castrated_dog-136727.jpg',
        'https://i.imgflip.com/y0hfw.jpg'
    ],
    answer: 'castration',
  },


  {
    pictures: [
        'https://pbs.twimg.com/media/C52Cq4vVAAE6vn5.jpg',
        'http://1.bp.blogspot.com/-i7-sRa5RXJE/UHoBcC5Hl8I/AAAAAAAABP8/Yt_9OcyYgk8/s1600/bee_movie_3.png',
        'https://secure.static.tumblr.com/534a9d2d9d5e0b151adf13bc21a0925b/a2z6lyl/bdonp354r/tumblr_static_tumblr_static__640.png',
        'https://scontent.cdninstagram.com/t51.2885-19/s150x150/14727627_325991054428668_4871223272852684800_a.jpg'
    ],
    answer: 'pollination',
  },


]
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}

export default reducer
