import React from "react";
import Image from "next/image";

const Resume = ({ resumeData }) => {
    return (
        <div className="max-w-4xl mx-auto border shadow-lg grid grid-cols-2 bg-white text-gray-800">
            {/* Left Side */}
            <div className="bg-[#F7F4F0] p-8">
                {/* Profile Image */}
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white">
                    {resumeData.photo && (
                        <Image
                            src={resumeData.photo instanceof File ? URL.createObjectURL(resumeData.photo) : resumeData.photo}
                            alt="Profile"
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>

                {/* Contact Section */}
                <div className="mb-4">
                    <h2 className="text-lg font-bold text-[#A97142] mb-2">CONTACT</h2>
                    <p className="text-sm"><strong>Phone:</strong> {resumeData.phone}</p>
                    <p className="text-sm"><strong>Email:</strong> {resumeData.email}</p>
                    <p className="text-sm"><strong>Address:</strong> {resumeData.city}, {resumeData.country}</p>
                </div>

                {/* Education Section */}
                <h2 className="text-lg font-bold text-[#A97142] mt-6 mb-2">EDUCATION</h2>
                {resumeData.educations?.map((edu, index) => (
                    <div key={index} className="mb-4">
                        <p className="text-sm font-semibold">{edu.startDate} - {edu.endDate || "Present"}</p>
                        <p className="text-sm font-semibold">{edu.school}</p>
                        <p className="text-sm">{edu.degree}</p>
                    </div>
                ))}

                {/* Skills */}
                <h2 className="text-lg font-bold text-[#A97142] mt-6 mb-2">SKILLS</h2>
                <ul className="text-sm list-disc list-inside">
                    {resumeData.skills?.map((skill, index) => <li key={index}>{skill}</li>)}
                </ul>
            </div>

            {/* Right Side */}
            <div className="p-8">
                <h1 className="text-3xl font-bold text-gray-900">{resumeData.firstName} {resumeData.lastName}</h1>

                {/* Personal Profile */}
                <h2 className="text-lg font-bold text-[#A97142] mt-6 mb-2">PERSONAL PROFILE</h2>
                <p className="text-sm">{resumeData.summary}</p>

                {/* Work Experience */}
                <h2 className="text-lg font-bold text-[#A97142] mt-6 mb-2">WORK EXPERIENCE</h2>
                {resumeData.workExperiences?.map((exp, index) => (
                    <div key={index} className="mb-4">
                        <p className="text-sm font-semibold">{exp.startDate} - {exp.endDate || "Present"}</p>
                        <p className="text-sm font-semibold">{exp.company}</p>
                        <p className="text-sm">{exp.position}</p>
                        <ul className="text-sm list-disc list-inside mt-2">
                            {exp.description?.split("\n").map((line, i) => <li key={i}>{line}</li>)}
                        </ul>
                    </div>
                ))}

                {/* Personal Details */}
                <h2 className="text-lg font-bold text-[#A97142] mt-6 mb-2">PERSONAL DETAILS</h2>
                <ul className="text-sm list-none">
                    <li>Aadhar Card Number: {resumeData.adhaarNumber}</li>
                    <li>Father’s Name: {resumeData.fatherName}</li>
                    <li>Mother’s Name: {resumeData.motherName}</li>
                </ul>
            </div>
        </div>
    );
};

export default Resume;
