const db = {
  statuses: [
    {
      created_at: 'Sat Nov 13 04:37:39 +0000 2021',
      /**
       * IDの取り扱いに関して、Bigintに相当する大きさのものは、JSONとして出力する際にTypeErrorが発生する
       * 対応策として、予め文字列として定義している
       *
       * @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt#json_%E3%81%A7%E3%81%AE%E4%BD%BF%E7%94%A8
       */
      id: '1459379912213622795',
      id_str: '1459379912213622795',
      full_text: '秋ですね☺️🍁 https://t.co/BbjFiTGF8v',
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [],
        urls: [],
        media: [
          {
            id: '1459379902420234243',
            id_str: '1459379902420234243',
            indices: [8, 31],
            media_url: 'http://pbs.twimg.com/media/FEDCSgQaMAMC8Kl.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FEDCSgQaMAMC8Kl.jpg',
            url: 'https://t.co/BbjFiTGF8v',
            display_url: 'pic.twitter.com/BbjFiTGF8v',
            expanded_url:
              'https://twitter.com/TwitterJP/status/1459379912213622795/photo/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop',
              },
              large: {
                w: 1536,
                h: 2048,
                resize: 'fit',
              },
              medium: {
                w: 900,
                h: 1200,
                resize: 'fit',
              },
              small: {
                w: 510,
                h: 680,
                resize: 'fit',
              },
            },
          },
        ],
      },
      extended_entities: {
        media: [
          {
            id: '1459379902420234243',
            id_str: '1459379902420234243',
            indices: [8, 31],
            media_url: 'http://pbs.twimg.com/media/FEDCSgQaMAMC8Kl.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FEDCSgQaMAMC8Kl.jpg',
            url: 'https://t.co/BbjFiTGF8v',
            display_url: 'pic.twitter.com/BbjFiTGF8v',
            expanded_url:
              'https://twitter.com/TwitterJP/status/1459379912213622795/photo/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop',
              },
              large: {
                w: 1536,
                h: 2048,
                resize: 'fit',
              },
              medium: {
                w: 900,
                h: 1200,
                resize: 'fit',
              },
              small: {
                w: 510,
                h: 680,
                resize: 'fit',
              },
            },
          },
        ],
      },
      metadata: {
        iso_language_code: 'ja',
        result_type: 'recent',
      },
      source:
        '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 7080152,
        id_str: '7080152',
        name: 'Twitter Japan',
        screen_name: 'TwitterJP',
        location: '東京都中央区',
        description: 'What is Happening?! 今日も何かが起きている?!',
        url: 'https://t.co/IgW6OEkIbG',
        entities: {
          url: {
            urls: [
              {
                url: 'https://t.co/IgW6OEkIbG',
                expanded_url: 'https://blog.twitter.com/ja_jp.html',
                display_url: 'blog.twitter.com/ja_jp.html',
                indices: [0, 23],
              },
            ],
          },
          description: {
            urls: [],
          },
        },
        protected: false,
        followers_count: 2279063,
        friends_count: 108,
        listed_count: 14928,
        created_at: 'Tue Jun 26 01:54:35 +0000 2007',
        favourites_count: 1052,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: true,
        statuses_count: 14508,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'C0DEED',
        profile_background_image_url:
          'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https:
          'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: true,
        profile_image_url:
          'http://pbs.twimg.com/profile_images/1354485696392613893/9T6ogVOI_normal.jpg',
        profile_image_url_https:
          'https://pbs.twimg.com/profile_images/1354485696392613893/9T6ogVOI_normal.jpg',
        profile_banner_url:
          'https://pbs.twimg.com/profile_banners/7080152/1633310159',
        profile_link_color: '1B95E0',
        profile_sidebar_border_color: 'FFFFFF',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: true,
        default_profile: false,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'regular',
        withheld_in_countries: [],
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 136,
      favorite_count: 1011,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'ja',
    },
    {
      created_at: 'Fri Oct 22 09:06:02 +0000 2021',
      id: '1451474917262704641',
      id_str: '1451474917262704641',
      full_text:
        '半分こ、とか可愛いこと言ってすいませんでした！秒で一個平らげました☺️ https://t.co/kEK0v1uuRE',
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [],
        urls: [],
        media: [
          {
            id: '1451474910723796994',
            id_str: '1451474910723796994',
            indices: [36, 59],
            media_url: 'http://pbs.twimg.com/media/FCSsvbYVcAINZUC.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FCSsvbYVcAINZUC.jpg',
            url: 'https://t.co/kEK0v1uuRE',
            display_url: 'pic.twitter.com/kEK0v1uuRE',
            expanded_url:
              'https://twitter.com/TwitterJP/status/1451474917262704641/photo/1',
            type: 'photo',
            sizes: {
              small: {
                w: 510,
                h: 680,
                resize: 'fit',
              },
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop',
              },
              large: {
                w: 1536,
                h: 2048,
                resize: 'fit',
              },
              medium: {
                w: 900,
                h: 1200,
                resize: 'fit',
              },
            },
          },
        ],
      },
      extended_entities: {
        media: [
          {
            id: '1451474910723796994',
            id_str: '1451474910723796994',
            indices: [36, 59],
            media_url: 'http://pbs.twimg.com/media/FCSsvbYVcAINZUC.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FCSsvbYVcAINZUC.jpg',
            url: 'https://t.co/kEK0v1uuRE',
            display_url: 'pic.twitter.com/kEK0v1uuRE',
            expanded_url:
              'https://twitter.com/TwitterJP/status/1451474917262704641/photo/1',
            type: 'photo',
            sizes: {
              small: {
                w: 510,
                h: 680,
                resize: 'fit',
              },
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop',
              },
              large: {
                w: 1536,
                h: 2048,
                resize: 'fit',
              },
              medium: {
                w: 900,
                h: 1200,
                resize: 'fit',
              },
            },
          },
        ],
      },
      metadata: {
        iso_language_code: 'ja',
        result_type: 'recent',
      },
      source:
        '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
      in_reply_to_status_id: '1450758553732534272',
      in_reply_to_status_id_str: '1450758553732534272',
      in_reply_to_user_id: '7080152',
      in_reply_to_user_id_str: '7080152',
      in_reply_to_screen_name: 'TwitterJP',
      user: {
        id: '7080152',
        id_str: '7080152',
        name: 'Twitter Japan',
        screen_name: 'TwitterJP',
        location: '東京都中央区',
        description: 'What is Happening?! 今日も何かが起きている?!',
        url: 'https://t.co/IgW6OEkIbG',
        entities: {
          url: {
            urls: [
              {
                url: 'https://t.co/IgW6OEkIbG',
                expanded_url: 'https://blog.twitter.com/ja_jp.html',
                display_url: 'blog.twitter.com/ja_jp.html',
                indices: [0, 23],
              },
            ],
          },
          description: {
            urls: [],
          },
        },
        protected: false,
        followers_count: 2279550,
        friends_count: 108,
        listed_count: 14934,
        created_at: 'Tue Jun 26 01:54:35 +0000 2007',
        favourites_count: 1054,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: true,
        statuses_count: 14493,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'C0DEED',
        profile_background_image_url:
          'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https:
          'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: true,
        profile_image_url:
          'http://pbs.twimg.com/profile_images/1354485696392613893/9T6ogVOI_normal.jpg',
        profile_image_url_https:
          'https://pbs.twimg.com/profile_images/1354485696392613893/9T6ogVOI_normal.jpg',
        profile_banner_url:
          'https://pbs.twimg.com/profile_banners/7080152/1633310159',
        profile_link_color: '1B95E0',
        profile_sidebar_border_color: 'FFFFFF',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: true,
        default_profile: false,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'regular',
        withheld_in_countries: [],
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 21,
      favorite_count: 263,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'ja',
    },
    {
      created_at: 'Wed Oct 13 03:21:09 +0000 2021',
      id: '1448126633915920392',
      id_str: '1448126633915920392',
      full_text:
        'そこで2018年7月から2021年7月の間、Twitter上でもっとも会話された韓国ドラマTOP20を紹介します✨\n\nみなさんは何作品、完走してる？👀 #BeyondKpop https://t.co/qDqhWbTV0o',
      truncated: false,
      entities: {
        hashtags: [
          {
            text: 'BeyondKpop',
            indices: [76, 87],
          },
        ],
        symbols: [],
        user_mentions: [],
        urls: [],
        media: [
          {
            id: '1448126627557388297',
            id_str: '1448126627557388297',
            indices: [88, 111],
            media_url: 'http://pbs.twimg.com/media/FBjHfslXsAkobvL.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FBjHfslXsAkobvL.jpg',
            url: 'https://t.co/qDqhWbTV0o',
            display_url: 'pic.twitter.com/qDqhWbTV0o',
            expanded_url:
              'https://twitter.com/TwitterJP/status/1448126633915920392/photo/1',
            type: 'photo',
            sizes: {
              small: {
                w: 680,
                h: 383,
                resize: 'fit',
              },
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop',
              },
              medium: {
                w: 1200,
                h: 675,
                resize: 'fit',
              },
              large: {
                w: 1920,
                h: 1080,
                resize: 'fit',
              },
            },
          },
        ],
      },
      extended_entities: {
        media: [
          {
            id: '1448126627557388297',
            id_str: '1448126627557388297',
            indices: [88, 111],
            media_url: 'http://pbs.twimg.com/media/FBjHfslXsAkobvL.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FBjHfslXsAkobvL.jpg',
            url: 'https://t.co/qDqhWbTV0o',
            display_url: 'pic.twitter.com/qDqhWbTV0o',
            expanded_url:
              'https://twitter.com/TwitterJP/status/1448126633915920392/photo/1',
            type: 'photo',
            sizes: {
              small: {
                w: 680,
                h: 383,
                resize: 'fit',
              },
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop',
              },
              medium: {
                w: 1200,
                h: 675,
                resize: 'fit',
              },
              large: {
                w: 1920,
                h: 1080,
                resize: 'fit',
              },
            },
          },
        ],
      },
      source: '<a href="https://www.sprinklr.com" rel="nofollow">Sprinklr</a>',
      in_reply_to_status_id: '1448126623304273923',
      in_reply_to_status_id_str: '1448126623304273923',
      in_reply_to_user_id: 7080152,
      in_reply_to_user_id_str: '7080152',
      in_reply_to_screen_name: 'TwitterJP',
      user: {
        id: 7080152,
        id_str: '7080152',
        name: 'Twitter Japan',
        screen_name: 'TwitterJP',
        location: '東京都中央区',
        description: 'What is Happening?! 今日も何かが起きている?!',
        url: 'https://t.co/IgW6OEkIbG',
        entities: {
          url: {
            urls: [
              {
                url: 'https://t.co/IgW6OEkIbG',
                expanded_url: 'https://blog.twitter.com/ja_jp.html',
                display_url: 'blog.twitter.com/ja_jp.html',
                indices: [0, 23],
              },
            ],
          },
          description: {
            urls: [],
          },
        },
        protected: false,
        followers_count: 2279101,
        friends_count: 108,
        listed_count: 14932,
        created_at: 'Tue Jun 26 01:54:35 +0000 2007',
        favourites_count: 1052,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: true,
        statuses_count: 14513,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'C0DEED',
        profile_background_image_url:
          'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https:
          'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: true,
        profile_image_url:
          'http://pbs.twimg.com/profile_images/1354485696392613893/9T6ogVOI_normal.jpg',
        profile_image_url_https:
          'https://pbs.twimg.com/profile_images/1354485696392613893/9T6ogVOI_normal.jpg',
        profile_banner_url:
          'https://pbs.twimg.com/profile_banners/7080152/1633310159',
        profile_link_color: '1B95E0',
        profile_sidebar_border_color: 'FFFFFF',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: true,
        default_profile: false,
        default_profile_image: false,
        following: false,
        follow_request_sent: false,
        notifications: false,
        translator_type: 'regular',
        withheld_in_countries: [],
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 43,
      favorite_count: 122,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'ja',
    },
    {
      created_at: 'Fri Oct 01 03:06:26 +0000 2021',
      id: '1443774278499897353',
      id_str: '1443774278499897353',
      full_text:
        'そして、Twitter上で盛り上がった場面と放映中にもっとも多く使われた絵文字上位5位を紹介します！ 観たみなさんは放映中にツイートしましたか？🔥 #鬼滅の刃 https://t.co/jyiqukTlK3',
      truncated: false,
      entities: {
        hashtags: [
          {
            text: '鬼滅の刃',
            indices: [74, 79],
          },
        ],
        symbols: [],
        user_mentions: [],
        urls: [],
        media: [
          {
            id: '1443773411721842691',
            id_str: '1443773411721842691',
            indices: [80, 103],
            media_url: 'http://pbs.twimg.com/media/FAlQRL3VkAMLkOM.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FAlQRL3VkAMLkOM.jpg',
            url: 'https://t.co/jyiqukTlK3',
            display_url: 'pic.twitter.com/jyiqukTlK3',
            expanded_url:
              'https://twitter.com/TwitterJP/status/1443774278499897353/photo/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop',
              },
              small: {
                w: 680,
                h: 383,
                resize: 'fit',
              },
              medium: {
                w: 1200,
                h: 675,
                resize: 'fit',
              },
              large: {
                w: 1920,
                h: 1080,
                resize: 'fit',
              },
            },
          },
        ],
      },
      extended_entities: {
        media: [
          {
            id: '1443773411721842691',
            id_str: '1443773411721842691',
            indices: [80, 103],
            media_url: 'http://pbs.twimg.com/media/FAlQRL3VkAMLkOM.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FAlQRL3VkAMLkOM.jpg',
            url: 'https://t.co/jyiqukTlK3',
            display_url: 'pic.twitter.com/jyiqukTlK3',
            expanded_url:
              'https://twitter.com/TwitterJP/status/1443774278499897353/photo/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop',
              },
              small: {
                w: 680,
                h: 383,
                resize: 'fit',
              },
              medium: {
                w: 1200,
                h: 675,
                resize: 'fit',
              },
              large: {
                w: 1920,
                h: 1080,
                resize: 'fit',
              },
            },
          },
          {
            id: '1443773388363763750',
            id_str: '1443773388363763750',
            indices: [80, 103],
            media_url: 'http://pbs.twimg.com/media/FAlQP02VkCYQ3KS.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FAlQP02VkCYQ3KS.jpg',
            url: 'https://t.co/jyiqukTlK3',
            display_url: 'pic.twitter.com/jyiqukTlK3',
            expanded_url:
              'https://twitter.com/TwitterJP/status/1443774278499897353/photo/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop',
              },
              small: {
                w: 680,
                h: 383,
                resize: 'fit',
              },
              medium: {
                w: 1200,
                h: 675,
                resize: 'fit',
              },
              large: {
                w: 1920,
                h: 1080,
                resize: 'fit',
              },
            },
          },
        ],
      },
      source:
        '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
      in_reply_to_status_id: '1443774275677163532',
      in_reply_to_status_id_str: '1443774275677163532',
      in_reply_to_user_id: 7080152,
      in_reply_to_user_id_str: '7080152',
      in_reply_to_screen_name: 'TwitterJP',
      user: {
        id: 7080152,
        id_str: '7080152',
        name: 'Twitter Japan',
        screen_name: 'TwitterJP',
        location: '東京都中央区',
        description: 'What is Happening?! 今日も何かが起きている?!',
        url: 'https://t.co/IgW6OEkIbG',
        entities: {
          url: {
            urls: [
              {
                url: 'https://t.co/IgW6OEkIbG',
                expanded_url: 'https://blog.twitter.com/ja_jp.html',
                display_url: 'blog.twitter.com/ja_jp.html',
                indices: [0, 23],
              },
            ],
          },
          description: {
            urls: [],
          },
        },
        protected: false,
        followers_count: 2279101,
        friends_count: 108,
        listed_count: 14932,
        created_at: 'Tue Jun 26 01:54:35 +0000 2007',
        favourites_count: 1052,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: true,
        statuses_count: 14513,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'C0DEED',
        profile_background_image_url:
          'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https:
          'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: true,
        profile_image_url:
          'http://pbs.twimg.com/profile_images/1354485696392613893/9T6ogVOI_normal.jpg',
        profile_image_url_https:
          'https://pbs.twimg.com/profile_images/1354485696392613893/9T6ogVOI_normal.jpg',
        profile_banner_url:
          'https://pbs.twimg.com/profile_banners/7080152/1633310159',
        profile_link_color: '1B95E0',
        profile_sidebar_border_color: 'FFFFFF',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: true,
        default_profile: false,
        default_profile_image: false,
        following: false,
        follow_request_sent: false,
        notifications: false,
        translator_type: 'regular',
        withheld_in_countries: [],
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 140,
      favorite_count: 250,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'ja',
    },
    {
      created_at: 'Fri Oct 01 03:06:26 +0000 2021',
      id: '1443774275677163532',
      id_str: '1443774275677163532',
      full_text:
        '先週土曜日にテレビで放映された『劇場版「#鬼滅の刃」無限列車編』🚂 Twitter上では放映当日の20:00から26:00までの間、同作品に関する会話は390万ツイートがありました🔥 https://t.co/pYbnBelDuE',
      truncated: false,
      entities: {
        hashtags: [
          {
            text: '鬼滅の刃',
            indices: [20, 25],
          },
        ],
        symbols: [],
        user_mentions: [],
        urls: [],
        media: [
          {
            id: '1443772731007254528',
            id_str: '1443772731007254528',
            indices: [92, 115],
            media_url:
              'http://pbs.twimg.com/tweet_video_thumb/FAlPpkAVQAABhi1.jpg',
            media_url_https:
              'https://pbs.twimg.com/tweet_video_thumb/FAlPpkAVQAABhi1.jpg',
            url: 'https://t.co/pYbnBelDuE',
            display_url: 'pic.twitter.com/pYbnBelDuE',
            expanded_url:
              'https://twitter.com/TwitterJP/status/1443774275677163532/photo/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop',
              },
              large: {
                w: 640,
                h: 358,
                resize: 'fit',
              },
              small: {
                w: 640,
                h: 358,
                resize: 'fit',
              },
              medium: {
                w: 640,
                h: 358,
                resize: 'fit',
              },
            },
          },
        ],
      },
      extended_entities: {
        media: [
          {
            id: '1443772731007254528',
            id_str: '1443772731007254528',
            indices: [92, 115],
            media_url:
              'http://pbs.twimg.com/tweet_video_thumb/FAlPpkAVQAABhi1.jpg',
            media_url_https:
              'https://pbs.twimg.com/tweet_video_thumb/FAlPpkAVQAABhi1.jpg',
            url: 'https://t.co/pYbnBelDuE',
            display_url: 'pic.twitter.com/pYbnBelDuE',
            expanded_url:
              'https://twitter.com/TwitterJP/status/1443774275677163532/photo/1',
            type: 'animated_gif',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop',
              },
              large: {
                w: 640,
                h: 358,
                resize: 'fit',
              },
              small: {
                w: 640,
                h: 358,
                resize: 'fit',
              },
              medium: {
                w: 640,
                h: 358,
                resize: 'fit',
              },
            },
            video_info: {
              aspect_ratio: [320, 179],
              variants: [
                {
                  bitrate: 0,
                  content_type: 'video/mp4',
                  url: 'https://video.twimg.com/tweet_video/FAlPpkAVQAABhi1.mp4',
                },
              ],
            },
          },
        ],
      },
      source:
        '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 7080152,
        id_str: '7080152',
        name: 'Twitter Japan',
        screen_name: 'TwitterJP',
        location: '東京都中央区',
        description: 'What is Happening?! 今日も何かが起きている?!',
        url: 'https://t.co/IgW6OEkIbG',
        entities: {
          url: {
            urls: [
              {
                url: 'https://t.co/IgW6OEkIbG',
                expanded_url: 'https://blog.twitter.com/ja_jp.html',
                display_url: 'blog.twitter.com/ja_jp.html',
                indices: [0, 23],
              },
            ],
          },
          description: {
            urls: [],
          },
        },
        protected: false,
        followers_count: 2279101,
        friends_count: 108,
        listed_count: 14932,
        created_at: 'Tue Jun 26 01:54:35 +0000 2007',
        favourites_count: 1052,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: true,
        statuses_count: 14513,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'C0DEED',
        profile_background_image_url:
          'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https:
          'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: true,
        profile_image_url:
          'http://pbs.twimg.com/profile_images/1354485696392613893/9T6ogVOI_normal.jpg',
        profile_image_url_https:
          'https://pbs.twimg.com/profile_images/1354485696392613893/9T6ogVOI_normal.jpg',
        profile_banner_url:
          'https://pbs.twimg.com/profile_banners/7080152/1633310159',
        profile_link_color: '1B95E0',
        profile_sidebar_border_color: 'FFFFFF',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: true,
        default_profile: false,
        default_profile_image: false,
        following: false,
        follow_request_sent: false,
        notifications: false,
        translator_type: 'regular',
        withheld_in_countries: [],
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 222,
      favorite_count: 539,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'ja',
    },
    {
      created_at: 'Tue Sep 28 03:50:39 +0000 2021',
      id: '1442698242953814018',
      id_str: '1442698242953814018',
      full_text: 'なんかいる https://t.co/qXvLR1iPyr',
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [],
        urls: [],
        media: [
          {
            id: '1442698237186564099',
            id_str: '1442698237186564099',
            indices: [6, 29],
            media_url: 'http://pbs.twimg.com/media/FAV-ZymWYAMux2J.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FAV-ZymWYAMux2J.jpg',
            url: 'https://t.co/qXvLR1iPyr',
            display_url: 'pic.twitter.com/qXvLR1iPyr',
            expanded_url:
              'https://twitter.com/TwitterJP/status/1442698242953814018/photo/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop',
              },
              large: {
                w: 900,
                h: 1200,
                resize: 'fit',
              },
              medium: {
                w: 900,
                h: 1200,
                resize: 'fit',
              },
              small: {
                w: 510,
                h: 680,
                resize: 'fit',
              },
            },
          },
        ],
      },
      extended_entities: {
        media: [
          {
            id: '1442698237186564099',
            id_str: '1442698237186564099',
            indices: [6, 29],
            media_url: 'http://pbs.twimg.com/media/FAV-ZymWYAMux2J.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FAV-ZymWYAMux2J.jpg',
            url: 'https://t.co/qXvLR1iPyr',
            display_url: 'pic.twitter.com/qXvLR1iPyr',
            expanded_url:
              'https://twitter.com/TwitterJP/status/1442698242953814018/photo/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop',
              },
              large: {
                w: 900,
                h: 1200,
                resize: 'fit',
              },
              medium: {
                w: 900,
                h: 1200,
                resize: 'fit',
              },
              small: {
                w: 510,
                h: 680,
                resize: 'fit',
              },
            },
          },
        ],
      },
      source: '<a href="https://www.sprinklr.com" rel="nofollow">Sprinklr</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 7080152,
        id_str: '7080152',
        name: 'Twitter Japan',
        screen_name: 'TwitterJP',
        location: '東京都中央区',
        description: 'What is Happening?! 今日も何かが起きている?!',
        url: 'https://t.co/IgW6OEkIbG',
        entities: {
          url: {
            urls: [
              {
                url: 'https://t.co/IgW6OEkIbG',
                expanded_url: 'https://blog.twitter.com/ja_jp.html',
                display_url: 'blog.twitter.com/ja_jp.html',
                indices: [0, 23],
              },
            ],
          },
          description: {
            urls: [],
          },
        },
        protected: false,
        followers_count: 2279101,
        friends_count: 108,
        listed_count: 14932,
        created_at: 'Tue Jun 26 01:54:35 +0000 2007',
        favourites_count: 1052,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: true,
        statuses_count: 14513,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'C0DEED',
        profile_background_image_url:
          'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https:
          'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: true,
        profile_image_url:
          'http://pbs.twimg.com/profile_images/1354485696392613893/9T6ogVOI_normal.jpg',
        profile_image_url_https:
          'https://pbs.twimg.com/profile_images/1354485696392613893/9T6ogVOI_normal.jpg',
        profile_banner_url:
          'https://pbs.twimg.com/profile_banners/7080152/1633310159',
        profile_link_color: '1B95E0',
        profile_sidebar_border_color: 'FFFFFF',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: true,
        default_profile: false,
        default_profile_image: false,
        following: false,
        follow_request_sent: false,
        notifications: false,
        translator_type: 'regular',
        withheld_in_countries: [],
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 1243,
      favorite_count: 2413,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'ja',
    },
  ],
  search_metadata: {
    completed_in: 0.017,
    max_id: '1451474917262704641',
    max_id_str: '1451474917262704641',
    next_results:
      '?max_id=1451474917262704640&q=exclude%3Aretweets%20filter%3Aimages%20from%3ATwitterJP&count=100&include_entities=1',
    query: 'exclude%3Aretweets+filter%3Aimages+from%3ATwitterJP',
    refresh_url:
      '?since_id=1451474917262704641&q=exclude%3Aretweets%20filter%3Aimages%20from%3ATwitterJP&include_entities=1',
    count: 100,
    since_id: 0,
    since_id_str: '0',
  },
}

export { db }
