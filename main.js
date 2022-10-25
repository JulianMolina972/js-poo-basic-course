/*
const natalia = {

  //attributes
  name: 'Natalia',
  age: 20,
  approvedCourses: [
    'Definitive html and css course',
    'Practical html and css course',
  ],

  //Method

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

};


function Student(name, age, approvedCourses) {
  this.name = name;
  this.age = age;
  this.approvedCourses = approvedCourses;

  // this.approveCourse = function (newCourse) {
  //   this.approvedCourses.push(newCourse);
  // }

}

Student.prototype.approveCourse = function (newCourse) {
  this.approvedCourses.push(newCourse);
}

const maria = new Student(
  'Maria Castillo',
  18,
  [
    'Introduction to javascript',
    'Introduction to html and css',
  ]
)

// Prototypes  with class syntax

class Student2 {
  constructor(
    {
    name, 
    age, 
    approvedCourses = [],
    email
    }
  ) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

}

const julian = new Student2({
  email: 'julian@mail.com',
  name: 'Julian',
  age: 23,
  
});


//////////////////////////////////////////////

const julian1 = {
  name: 'JulianDM',
  username: 'juliandm',
  points: 20000,
  socialMedia: {
    twitter: 'juliandm',
    instagram: 'juliandm',
    linkedin: 'juliandm',
  },

  approvedCourses: [
    'Definitive html and css course',
    'Practical html and css course',
  ],

  learningPaths: [
    {
      name: 'Web development school',
      courses: [
        'Definitive html and css course',
        'Practical html and css course',
        'Responsive design course'
      ]
    },
    {
      name: 'VideoGames school',
      courses: [
        'Introduction vgs course',
        'Unreal Engine course',
        'Unity 3D course  '
      ],
    },
  ],
};

const david = {
  name: 'David',
  username: 'davidmv',
  points: 30000,
  socialMedia: {
    twitter: 'davidmv',
    instagram: 'davidmv',
    linkedin: 'davidmv',
  },

  approvedCourses: [
    'DataBusiness course',
    'DataViz course',
  ],

  learningPaths: [
    {
      name: 'Web development school',
      courses: [
        'Definitive html and css course',
        'Practical html and css course',
        'Responsive design course'
      ]
    },
    {
      name: 'DataScience school',
      courses: [
        'DataBusiness course',
        'DataViz course',
        'Tableau course'
      ],
    },
  ],
};

*/

// class


function videoPlay(id) {
  const urlSecret = 'https://platzinauta.com/' + id
  console.log('is playing from the url' + urlSecret)
}

function videoStop(id) {
  const urlSecret = 'https://platzinauta.com/' + id
  console.log('Pause url' + urlSecret)
}


// export class PlatziClass {
//   constructor({
//     name,
//     videoId,
//   }) {
//     this.name = name;
//     this.videoId = videoId;
//   }

//   reproduce() { 
//     videoPlay(this.videoId)

//   }

//   pause() {
//     videoStop(this.videoId)

//   }

// }





class Comment {
  constructor({
    content,
    studentName,
    studentRole = 'student',
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;

  }

  publish() {
    console.log(this.studentName + '(' + this.studentRole + ')');
    console.log(this.likes + ' likes');
    console.log(this.content);
  }


}



class Student {
  constructor({
    name, 
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name
    this.email= email
    this.username = username
    this.socialMedia = {
      twitter,
      instagram, 
      facebook 
    }
  
    this.approvedCourses = approvedCourses,
    this.learningPaths = learningPaths
  }

  publishComment(commentContent){
    const comment = new Comment({
      content: commentContent,
      studentName: this.name
    })

    comment.publish();
  }

}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if(newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn('Sorry' + this.name + 'you can only take open courses')
    }

  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);

  }

  approveCourse(newCourse) {
    if(newCourse.lang !== 'english') {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn('Sorry ' + this.name + ' you cannot take english courses')
    }

  }

}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);

  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);

  }

}
class TeacherStudent extends Student {
  constructor(props) {
    super(props);

  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);

  }

  publishComment(commentContent){
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: 'teacher'
    })

    comment.publish();
  }


}

















class Course {
  constructor({
    name,
    classes = [],
    isFree = false,
    lang = 'spanish',
  }) {
    this._name = name
    this.classes = classes
    this.isFree = isFree
    this.lang = lang
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName === 'bad course') {
      console.error('Warning')
    } else {
      this._name = newName;
    }

  }

}

class Classes {
  constructor({
    name,
  }) {
    this.name = name
  }
}



const classSoccerPoo = new Classes({
  name: 'Poo explanation class with soccer'
})


const programmingCourse = new Course({
  name: "Free basic programming course",
  classes: [
    classSoccerPoo
  ],
  isFree: true,
})

// programmingCourse.name = ''
// programmingCourse.changeName('')
//Free basic programming course

const definitiveHtmlCssCourse = new Course({
  name: "Definitive html and css course",
  classes: [
    classSoccerPoo
  ]
})

const practicalHtmlCssCourse = new Course({
  name: "Practical html and css course",
  classes: [
    classSoccerPoo
  ],
  lang: 'english'
})





class LearningPath {
  constructor({
    name,
    courses = []
  }) {
    this.name = name
    this.courses = courses
  }
}

const webSchool = new LearningPath({
  name: 'Web development school',
  courses: [
    programmingCourse,
    definitiveHtmlCssCourse,
    practicalHtmlCssCourse,
    'Responsive design course'
  ] 
});

const dataSchool = new LearningPath({
  name: 'Data science school',
  courses: [
    programmingCourse,
    'DataBusiness course',
    'DataViz course',
    'Tableau course'
  ] 
});
const videoGameSchool = new LearningPath({
  name: 'Video games school',
  courses: [
    programmingCourse,
    'Introduction vgs course',
    'Unreal Engine course',
    'Unity 3D course  '
  ] 
});


const julian = new FreeStudent({
  name: 'Julian Molina',
  username: 'juliandm',
  email: 'julian@mail.com',
  twitter: 'juliandm',
  learningPaths: {
    webSchool,
    dataSchool
  }
})

const david = new BasicStudent({
  name: 'david Molina',
  username: 'davidmv',
  email: 'david@mail.com',
  twitter: 'davidmv',
  learningPaths: {
    webSchool,
    videoGameSchool
  }
})

const freddy = new TeacherStudent({
  name: 'Freddy Vega',
  username: 'freddyv',
  email: 'freddyv@mail.com',
  twitter: 'freddyv',
  learningPaths: {
    webSchool,
    videoGameSchool
  }
})