import React from 'react';

const Resume = ({ resumeData }) => {
    const SectionTitle = ({ children }) => (
        <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-full" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{children}</h2>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto p-8 bg-gray-50">
            {/* Header */}
            <div className="bg-gray-800 rounded-3xl p-8 mb-8">
                <div className="flex gap-8">
                    <div className="w-48 h-48 rounded-lg overflow-hidden">
                        {resumeData.photo && (
                            <img
                                src={resumeData.photo instanceof File ? URL.createObjectURL(resumeData.photo) : resumeData.photo}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                    <div className="text-white">
                        <h1 className="text-4xl font-bold mb-2">{resumeData.firstName} {resumeData.lastName}</h1>
                        <p className="text-xl text-gray-400 mb-6">{resumeData.trade}</p>
                        <div className="space-y-2">
                            <p className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-white rounded-full" />
                                {resumeData.phone}
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-white rounded-full" />
                                {resumeData.email}
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-white rounded-full" />
                                {resumeData.city}, {resumeData.country}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Summary */}
            <div className="mb-8">
                <SectionTitle>Summary</SectionTitle>
                <p className="text-gray-600">{resumeData.summary}</p>
            </div>

            {/* Education */}
            <div className="mb-8">
                <SectionTitle>Education</SectionTitle>
                <div className="grid grid-cols-3 gap-6">
                    {resumeData.educations?.map((edu, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="font-semibold">{edu.school}</h3>
                            <p className="text-gray-600">{edu.degree}</p>
                            <p className="text-gray-500">Graduated: {edu.endDate || "Present"}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Work Experience */}
            <div className="mb-8">
                <SectionTitle>Work Experiences/Apprenticeship</SectionTitle>
                <div className="grid grid-cols-3 gap-6">
                    {resumeData.workExperiences?.map((exp, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="font-semibold">{exp.company}</h3>
                            <p className="text-gray-600">{exp.position}</p>
                            <p className="text-gray-500">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
                <SectionTitle>Skills</SectionTitle>
                <div className="grid grid-cols-3 gap-4">
                    {resumeData.skills?.map((skill, index) => (
                        <p key={index} className="text-gray-600">{skill}</p>
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div className="mb-8">
                <SectionTitle>Certifications</SectionTitle>
                <div className="grid grid-cols-3 gap-4">
                    {resumeData.certifications?.map((cert, index) => (
                        <p key={index} className="text-gray-600">{cert}</p>
                    ))}
                </div>
            </div>

            {/* Personal Details */}
            <div className="mb-8">
                <SectionTitle>Personal Details</SectionTitle>
                <div className="grid grid-cols-2 gap-4">
                    <p className="text-gray-600">Father's Name: {resumeData.fatherName}</p>
                    <p className="text-gray-600">Mother's Name: {resumeData.motherName}</p>
                    <p className="text-gray-600">Aadhar Card No.: {resumeData.adharNumber}</p>
                </div>
            </div>
        </div>
    );
};

export default Resume;
