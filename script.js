new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [

        {
          name: "Baazigar",
          artist: "Divine",
          cover: "https://iili.io/J7oIOI2.png",
          source: "https://audio.jukehost.co.uk/YWM1GKnZibxxjWCjVKInZXyTX853oj1i",
          url: "https://youtu.be/sek3FhByr6w?si=1wVM3yjr-gc9XUgW",
          favorited: false
        },
        {
          name: "Desi Kalakaar",
          artist:"Yo Yo Honey Singh",
          cover:"https://iili.io/J7o7Ppa.png",
          source: "https://audio.jukehost.co.uk/Mc38PJkkxPV0HwvT3ytOBUKfIFSXxFg5",
          url: "https://youtu.be/KhnVcAC5bIM?si=frmW2IZCe7yApJE5",
          favorited:false
        },

        {
          name: "Karm Ki Talwar",
          artist: "Dikz",
          cover: "https://iili.io/J7orfVf.png",
          source: "https://audio.jukehost.co.uk/IqaX7MPUITsB39ia6WbBFNnbj1JRQqsT",
          url: "https://youtu.be/giXC15tQJCs?si=hMSm0rIIFykx-j7G",
          favorited: false
        },

        {
          name: "Kalaastar",
          artist: "Yo Yo Honey Singh",
          cover: "https://iili.io/J7xJDWx.png",
          source: "https://audio.jukehost.co.uk/CzGLYIyg7HjmpKxmhDFyJSYEAllWWTqC",
          url: "https://youtu.be/-PshNjguh_4?si=84AmD-0mrrcsrpIj",
          favorited: false
        },

        {
          name: "Street Celebrity",
          artist: "Kayden Sharma, Karan Kanchan",
          cover: "https://iili.io/J7xTLej.png",
          source: "https://audio.jukehost.co.uk/BS3afCHi9uBmGpO5z0CRAE11tyEXdjdo",
          url: "https://youtu.be/2u80yFDtszE?si=xyD_9qIVlj1JsH8Y",
          favorited: false
        },

        {
          name: "Badhte Chalo",
          artist: "Shankar Mahadevan, Vishal Dadlani, Divya Kumar, Shankar-Ehsaan-Loy",
          cover: "https://iili.io/J7xXZs1.png",
          source: "https://audio.jukehost.co.uk/Gj3GPW9qjJMSW2LzeEjyhtNeZlwoo7NA",
          url: "https://youtu.be/W7kdKf_aqX4?si=Fp4gX7Xl3m_goLm7",
          favorited: false
        },

        {
          name: "PUBG PRO",
          artist: "Primz",
          cover: "https://iili.io/J7YhXb1.png",
          source: "https://audio.jukehost.co.uk/uwmHuIXrTZLWuLUWu6DC6nzD4iHqs30g",
          url: "https://youtu.be/HnX7gdEvzVE?si=KBaDiAeF3Nyz6_Zw",
          favorited: false
        },

        {
          name: "One Piece Rap Revisit",
          artist: "Dikz",
          cover: "https://iili.io/J7Ye2wB.png",
          source: "https://audio.jukehost.co.uk/zwNPk6DfvPydgpcUw6oVztIjizQb9Uqb",
          url: "https://youtu.be/EC-wSmU3D8o?si=0-XoBnfAhSSc3kKC",
          favorited: false
        },

        {
          name: "Nazz vs Srushti",
          artist: "Nazz, Srushti Tawade",
          cover: "https://iili.io/J7WLewJ.png",
          source: "https://audio.jukehost.co.uk/vu6nt8nfF3Xzpc03opKQc3BJ8QRwN9h6",
          url: "https://youtu.be/7_TT7jtCJOU?si=2fdKh0BcJhqxXov4",
          favorited: false
        },

        {
          name: "LIFE",
          artist: "Ujjwal, Panther, Sez On The Beat",
          cover: "https://iili.io/J7WQaKN.png",
          source: "https://audio.jukehost.co.uk/ZuQABkc7bTMT480leCo1lCVF9xp9h7z2",
          url: "https://youtu.be/Be_IPqZFdhs?si=Wgbi1Va1zK17GSjY",
          favorited: false
        },

        {
          name: "Satya",
          artist: "DIVINE",
          cover: "https://iili.io/J7WtJQj.png",
          source: "https://audio.jukehost.co.uk/jddlS0XCiutWqy0EXn6bBoXHSQaP6pCG",
          url: "https://youtu.be/PTUXeIZ2Pqw?si=LS_j8y14WXGkVoja",
          favorited: false
        },

        {
          name: "Lover",
          artist: "Diljit Dosanjh",
          cover: "https://iili.io/J7Wtewu.png",
          source: "https://audio.jukehost.co.uk/fZ6NqwcYJULFAbfXb1dKXgBkUFA3YIYX",
          url: "https://youtu.be/mH_LFkWxpI0?si=xEybROdqXzeHPuV7",
          favourited: false
        },

        {
          name: "Amplifier",
          artist: "Imran Khan",
          cover: "https://iili.io/J7WD5Vj.png",
          source: "https://audio.jukehost.co.uk/CcLfAxKgO0fsnNbnjsTcpX7nSfGWvLrt",
          url: "https://youtu.be/uuCFRaFWjwY?si=WRzmZEI_UVV78mUC",
          favourited: false
        },

        {
          name: "If Asian Parents Made A Rap Song",
          artist: "Korean Comic",
          cover: "https://iili.io/J7Wbwhu.png",
          source: "https://audio.jukehost.co.uk/HnhuTfBzWYwpbW777PCHAgI8bQPvl6Xp",
          url: "https://youtu.be/FmLzfYBHfuY?si=Gy-sdXYHM8AJzPF8",
          favourited: false
        },

        {
          name: "Hass Hass",
          artist: "Diljit Dosanjh, Sia",
          cover: "https://iili.io/J7WmUPf.png",
          source: "https://audio.jukehost.co.uk/WQdvn65v1p2jfw3arRAymTYtheklWmmG",
          url: "https://youtu.be/jADTdg-o8i0?si=5tH00JFyfTFcBUmy",
          favourited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
