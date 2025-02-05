let currentDepartment = '';

// Mapping object for type names
const typeNames = {
    classNotes: "Class Notes",
    Questionbank: "Question Bank",
    universityQuestions: "University Questions",
    amcetQuestions: "AMCET Questions",
    pythonlab: "Python Lab",
    dsd: "DSD Lab"

};

// Department-specific resources
const departmentResources = {
    aids: {
        1: {
            subjects: [

                {
                    name: "Programming in Python",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Chemistry",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "pythonlab", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        2: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        3: {
            subjects: [

                {
                    name: "DSdD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        3: {
            subjects: [

                {
                    name: "DSDa",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        4: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        5: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        6: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        7: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        8: {
            subjects: [

                {
                    name: "summa",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        // Add similar structure for years 2,3,4
    },
    cse: {
        1: {
            subjects: [

                {
                    name: "Programming in Python",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Chemistry",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "pythonlab", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        2: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        3: {
            subjects: [

                {
                    name: "DSdD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        3: {
            subjects: [

                {
                    name: "DSDa",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        4: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        5: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        6: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        7: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        8: {
            subjects: [

                {
                    name: "summa",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
    },
    ece: {
        1: {
            subjects: [

                {
                    name: "Programming in Python",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Chemistry",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "pythonlab", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        2: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        3: {
            subjects: [

                {
                    name: "DSdD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        3: {
            subjects: [

                {
                    name: "DSDa",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        4: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        5: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        6: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        7: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        8: {
            subjects: [

                {
                    name: "summa",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
    },
    civil: {
        1: {
            subjects: [

                {
                    name: "Programming in Python",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Chemistry",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "pythonlab", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        2: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        3: {
            subjects: [

                {
                    name: "DSdD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        3: {
            subjects: [

                {
                    name: "DSDa",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        4: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        5: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        6: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        7: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        8: {
            subjects: [

                {
                    name: "summa",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
    },
    mech: {
        1: {
            subjects: [

                {
                    name: "Programming in Python",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Chemistry",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "pythonlab", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        2: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        3: {
            subjects: [

                {
                    name: "DSdD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        3: {
            subjects: [

                {
                    name: "DSDa",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        4: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        5: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        6: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        7: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        8: {
            subjects: [

                {
                    name: "summa",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
    },
    it: {
        1: {
            subjects: [

                {
                    name: "Programming in Python",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Chemistry",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "pythonlab", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        2: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        3: {
            subjects: [

                {
                    name: "DSdD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        3: {
            subjects: [

                {
                    name: "DSDa",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        4: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        5: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        6: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        7: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        8: {
            subjects: [

                {
                    name: "summa",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
    },
    eee: {
        1: {
            subjects: [

                {
                    name: "Programming in Python",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Chemistry",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - I",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "pythonlab", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        2: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        3: {
            subjects: [

                {
                    name: "DSdD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        3: {
            subjects: [

                {
                    name: "DSDa",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        4: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        5: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        6: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        7: {
            subjects: [

                {
                    name: "DSD",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
        8: {
            subjects: [

                {
                    name: "summa",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example1/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example2/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example3/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example4/view" }
                    ]
                },
                {
                    name: "Mathematics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Physics - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "B-EEE",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "English - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "Tamil - II",
                    materials: [
                        { type: "classNotes", url: "https://drive.google.com/file/d/example5/view" },
                        { type: "Questionbank", url: "https://drive.google.com/file/d/example6/view" },
                        { type: "universityQuestions", url: "https://drive.google.com/file/d/example7/view" },
                        { type: "amcetQuestions", url: "https://drive.google.com/file/d/example8/view" }
                    ]
                },
                {
                    name: "LAB MANUALS",
                    materials: [
                        { type: "dsd", url: "https://drive.google.com/file/d/example1/view" },
                    ]
                },
            ],

        },
    }
    // ...department...
    // Add similar structure for other departments
};

// Function to show loading indicator
function showLoading() {
    document.getElementById('loadingIndicator').classList.remove('hidden');
}

// Function to hide loading indicator
function hideLoading() {
    document.getElementById('loadingIndicator').classList.add('hidden');
}

function selectDepartment(dept) {
    currentDepartment = dept;
    document.getElementById('departmentSelection').classList.add('hidden');
    document.getElementById('yearSelection').classList.remove('hidden');
    document.getElementById('selectedDeptTitle').textContent = getDepartmentFullName(dept);
    document.getElementById('resourcesContainer').innerHTML = '';
}

function getDepartmentFullName(dept) {
    const deptNames = {
        aids: 'AI & DS Department',
        cse: 'Computer Science Engineering',
        ece: 'Electronics & Communication Engineering',
        it: 'Information Technology',
        mech: 'Mechanical Engineering',
        civil: 'Civil Engineering',
        eee: 'Electrical & Electronics Engineering'
    };
    return deptNames[dept] || dept.toUpperCase();
}

function backToDepartments() {
    document.getElementById('departmentSelection').classList.remove('hidden');
    document.getElementById('yearSelection').classList.add('hidden');
    document.getElementById('resourcesContainer').innerHTML = '';
}

function showResources(year) {
    showLoading();
    const container = document.getElementById('resourcesContainer');
    container.innerHTML = '';

    const resources = departmentResources[currentDepartment][year];
    if (!resources) {
        container.innerHTML = `
            <div class="col-span-full text-center p-8">
                <h3 class="text-xl text-gray-600">Resources for this year are being updated...</h3>
            </div>
        `;
        hideLoading();
        return;
    }

    // Add Subject Cards with enhanced sections
    resources.subjects.forEach(subject => {
        container.innerHTML += `
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 class="text-xl font-bold text-blue-600 mb-4">${subject.name}</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    ${subject.materials.map(material => `
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h4 class="font-semibold text-gray-700 mb-3">${typeNames[material.type]}</h4>
                            <div class="flex space-x-2">
                                <a href="${material.url}" target="_blank"
                                   class="flex-1 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition-colors text-center">
                                    <i class="fas fa-eye mr-1"></i>View
                                </a>
                                <a href="${material.url}" download
                                   class="flex-1 bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition-colors text-center">
                                    <i class="fas fa-download mr-1"></i>Download
                                </a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    hideLoading();
}

// Search Functionality
// function searchSubjects() {
//     const searchTerm = document.getElementById('searchInput').value.toLowerCase();
//     const container = document.getElementById('resourcesContainer');
//     container.innerHTML = '';

//     Object.keys(departmentResources).forEach(dept => {
//         Object.keys(departmentResources[dept]).forEach(year => {
//             departmentResources[dept][year].subjects.forEach(subject => {
//                 if (subject.name.toLowerCase().includes(searchTerm)) {
//                     container.innerHTML += `
//                         <div class="subject-card">
//                             <h3>${subject.name}</h3>
//                             ${subject.materials.map(material => `
//                                 <a href="${material.url}" target="_blank">${typeNames[material.type]}</a>
//                             `).join('')}
//                         </div>
//                     `;
//                 }
//             });
//         });
//     });
// } 

document.getElementById('searchInput').addEventListener('input', searchSubjects);