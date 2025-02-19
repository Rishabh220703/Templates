import React from "react";
import Image from "next/image";

const Resume = ({ resumeData }) => {
    return (
        <div className="bg-gray-100 text-blue-900 min-h-screen flex justify-center py-10 px-5">
            <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden grid grid-cols-2">
                {/* Left Section */}
                <div className="bg-blue-900 text-white p-8 relative">
                    <div className="absolute top-6 left-6 w-16 h-16 bg-blue-400 rounded-full"></div>
                    <div className="relative z-10">
                        <div className="w-40 h-40 mx-auto bg-gray-300 rounded-full overflow-hidden border-4 border-white">
                            {resumeData.photo && (
                                <Image
                                    src={resumeData.photo instanceof File ? URL.createObjectURL(resumeData.photo) : resumeData.photo}
                                    alt="Profile"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                        <h2 className="text-center text-2xl font-bold mt-4">{resumeData.firstName} {resumeData.lastName}</h2>
                        <p className="text-center text-lg font-semibold text-blue-300">{resumeData.trade}</p>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold border-b-2 pb-1">SKILLS</h3>
                            <ul className="mt-2 space-y-2 text-sm">
                                {resumeData.skills?.map((skill, index) => <li key={index}>{skill}</li>)}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold border-b-2 pb-1">EDUCATION</h3>
                            {resumeData.educations?.map((edu, index) => (
                                <div key={index} className="mb-2">
                                    <p className="text-sm font-semibold">{edu.school}</p>
                                    <p className="text-xs">Graduated: {edu.endDate || "Present"}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold border-b-2 pb-1">CONTACT</h3>
                            <p className="text-sm">📞 {resumeData.phone}</p>
                            <p className="text-sm">📧 {resumeData.email}</p>
                            <p className="text-sm">📍 {resumeData.city}, {resumeData.country}</p>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="p-8">
                    <h3 className="text-2xl font-bold border-b-2 pb-1">INTRODUCTION</h3>
                    <p className="text-sm mt-2 text-gray-700">{resumeData.summary}</p>

                    <div className="mt-6">
                        <h3 className="text-xl font-bold border-b-2 pb-1">APPRENTICE/WORK</h3>
                        {resumeData.workExperiences?.map((exp, index) => (
                            <div key={index} className="mb-4">
                                <p className="font-semibold text-blue-800">{exp.position} - {exp.company}</p>
                                <p className="text-xs text-gray-600">{exp.startDate} - {exp.endDate || "Present"}</p>
                                <ul className="mt-2 space-y-2 text-sm text-gray-700">
                                    {exp.description?.split("\n").map((line, i) => <li key={i}>{line}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-bold border-b-2 pb-1">PERSONAL DETAILS</h3>
                        <ul className="text-sm mt-2 text-gray-700">
                            <li>Aadhar Card Number: {resumeData.adhaarNumber}</li>
                            <li>Father’s Name: {resumeData.fatherName}</li>
                            <li>Mother’s Name: {resumeData.motherName}</li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-bold border-b-2 pb-1">CERTIFICATIONS</h3>
                        <ul className="text-sm mt-2 text-gray-700">
                            {resumeData.certifications?.map((cert, index) => <li key={index}>{cert}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
