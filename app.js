const listings = [
  {
    "title": "Featured Apps",
    "apps": [
      {
          "name": "My Cool App",
          "description": "A revolutionary new way to do whatever you want!",
          "thumbImgUrl": "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
          "authorName": "Someone",
          "linkUrl": "#"
        },
       {
          "name": "My Cool App",
          "description": "A revolutionary new way to do whatever you want!",
          "thumbImgUrl": "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
          "authorName": "Someone",
          "linkUrl": "#"
        }
    ]
  },
 {
    "title": "All Apps",
     "apps": [
       {
          "name": "My Cool App",
          "description": "A revolutionary new way to do whatever you want!",
          "thumbImgUrl": "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
          "authorName": "Someone",
          "linkUrl": "#"
        },
       {
          "name": "My Cool App",
          "description": "A revolutionary new way to do whatever you want!",
          "thumbImgUrl": "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
          "authorName": "Someone",
          "linkUrl": "#"
        },
       {
          "name": "My Cool App",
          "description": "A revolutionary new way to do whatever you want!",
          "thumbImgUrl": "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
          "authorName": "Someone",
          "linkUrl": "#"
        },
       {
          "name": "My Cool App",
          "description": "A revolutionary new way to do whatever you want!",
          "thumbImgUrl": "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
          "authorName": "Someone",
          "linkUrl": "#"
        },
       {
          "name": "My Cool App",
          "description": "A revolutionary new way to do whatever you want!",
          "thumbImgUrl": "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
          "authorName": "Someone",
          "linkUrl": "#"
        },
       {
          "name": "My Cool App",
          "description": "A revolutionary new way to do whatever you want!",
          "thumbImgUrl": "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
          "authorName": "Someone",
          "linkUrl": "#"
        }
     ]
}
]

const { createApp } = Vue

  createApp({
    data() {
      return {
        listings: listings
      }
    }
  }).mount('#listings')