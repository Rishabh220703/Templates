import React from 'react';

const Resume = ({ resumeData }) => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-gray-50 flex">
            {/* Sidebar */}
            <div className="w-1/3 bg-teal-800 text-white p-6 rounded-l-3xl">
                <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-4">
                        <img
                            src={resumeData.photo instanceof File ? URL.createObjectURL(resumeData.photo) : resumeData.photo || "https://via.placeholder.com/150"}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-center">{resumeData.firstName} {resumeData.lastName}</h1>
                    <p className="text-lg text-center">{resumeData.trade}</p>
                </div>

                {/* About Me */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">About Me</h2>
                    <p className="text-sm">{resumeData.summary}</p>
                </div>

                {/* Contact */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Contact</h2>
                    <p className="text-sm">📞 {resumeData.phone}</p>
                    <p className="text-sm">📧 {resumeData.email}</p>
                    <p className="text-sm">📍 {resumeData.city}, {resumeData.country}</p>
                </div>

                {/* Personal Details */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Personal Details</h2>
                    <p className="text-sm">👨 Father: {resumeData.fatherName}</p>
                    <p className="text-sm">👩 Mother: {resumeData.motherName}</p>
                    <p className="text-sm">🆔 Aadhaar No.: {resumeData.adharNumber}</p>
                </div>

                {/* Skills */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Skills</h2>
                    <ul className="list-disc list-inside">
                        {resumeData.skills?.map((skill, index) => (
                            <li key={index} className="text-sm">{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-2/3 p-6">
                {/* Education */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Education</h2>
                    {resumeData.educations?.map((edu, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="font-semibold">({edu.startDate} - {edu.endDate}) {edu.school}</h3>
                            <p className="text-sm">{edu.degree}</p>
                            <p className="text-sm">GPA: {edu.gpa}</p>
                        </div>
                    ))}
                </div>

                {/* Experience */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Experience</h2>
                    {resumeData.workExperiences?.map((exp, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="font-semibold">({exp.startDate} - {exp.endDate}) {exp.position}</h3>
                            <p className="text-sm font-bold">{exp.company}</p>
                            <ul className="list-disc list-inside text-sm">
                                {exp.responsibilities?.map((res, i) => (
                                    <li key={i}>{res}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resume;
