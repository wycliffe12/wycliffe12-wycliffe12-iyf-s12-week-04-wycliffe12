
const GradeTracker = {

    students: [],

    // Add a student
    addStudent(name, grades) {
        this.students.push({
            name: name,
            grades: grades
        });
    },

    // Find a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name);
    },

    // Calculate one student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);

        if (!student) {
            return null;
        }

        const grades = Object.values(student.grades);

        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return total / grades.length;
    },

    // Calculate average for a subject
    getSubjectAverage(subject) {
        const grades = this.students
            .filter(student => student.grades[subject] !== undefined)
            .map(student => student.grades[subject]);

        if (grades.length === 0) {
            return null;
        }

        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return total / grades.length;
    },

    // Find the student with the highest average
    getTopStudent() {
        if (this.students.length === 0) {
            return null;
        }

        return this.students.reduce((topStudent, currentStudent) => {
            return this.getStudentAverage(currentStudent.name) >
                this.getStudentAverage(topStudent.name)
                ? currentStudent
                : topStudent;
        });
    },

    // Find students with an average below 70
    getStrugglingStudents() {
        return this.students.filter(student => {
            return this.getStudentAverage(student.name) < 70;
        });
    },

    // Convert a score into a letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    // Generate a student's report card
    generateReportCard(name) {
        const student = this.getStudent(name);

        if (!student) {
            return "Student not found";
        }

        const average = this.getStudentAverage(name);

        return {
            name: student.name,
            grades: student.grades,
            average: Number(average.toFixed(2)),
            letterGrade: this.getLetterGrade(average)
        };
    }
};


// ===================================
// ADD STUDENTS
// ===================================

GradeTracker.addStudent("Alice", {
    math: 90,
    english: 95,
    science: 90
});

GradeTracker.addStudent("Bob", {
    math: 70,
    english: 80,
    science: 77
});

GradeTracker.addStudent("Charlie", {
    math: 50,
    english: 60,
    science: 65
});


// ===================================
// TEST THE GRAD E TRACKER
// ===================================

console.log("Alice's average:",
    GradeTracker.getStudentAverage("Alice").toFixed(2));

console.log("Bob's average:",
    GradeTracker.getStudentAverage("Bob").toFixed(2));

console.log("Math subject average:",
    GradeTracker.getSubjectAverage("math").toFixed(2));

console.log("Top student:",
    GradeTracker.getTopStudent().name);

console.log("Struggling students:",
    GradeTracker.getStrugglingStudents().map(student => student.name));

console.log("Alice's report card:",
    GradeTracker.generateReportCard("Alice"));
