import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jobsApi } from '../../../redux/features/jobSlice/JobSlice'
import { FaBriefcase, FaBuilding, FaClock, FaLaptop, FaMoneyBillWave, FaPhone, FaUserTie } from 'react-icons/fa'

function Jobs() {
    const hiring = useSelector((state) => state.jobsOffers)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(jobsApi())
    }, [])


    return (
        <div> <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center tracking-wide">
            🚀 Job <span className="text-blue-600">Listings</span>
        </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {hiring.jobsOffers?.map((job) => (
                    <div key={job.id} className="bg-white p-6 shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl transition duration-300">
                        <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
                        <p className="text-gray-500 flex items-center mt-1">
                            <FaBuilding className="mr-2 text-gray-600" /> {job.company} - {job.location}
                        </p>
                        <p className="text-gray-600 mt-3">{job.description}</p>
                        <p className="text-green-600 font-semibold mt-3 flex items-center">
                            <FaMoneyBillWave className="mr-2 text-green-700" /> Salary: ${job.salary_from} - ${job.salary_to}
                        </p>
                        <p className="text-gray-800 flex items-center">
                            <FaBriefcase className="mr-2 text-blue-600" /> {job.employment_type}
                        </p>
                        <p className="text-red-500 flex items-center">
                            <FaClock className="mr-2" /> Deadline: {job.application_deadline}
                        </p>
                        <p className="text-gray-700 font-semibold flex items-center">
                            <FaUserTie className="mr-2 text-yellow-500" /> Category: {job.job_category}
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <FaLaptop className="mr-2 text-purple-500" /> Remote: {job.is_remote_work ? "Yes" : "No"}
                        </p>
                        <p className="text-gray-700">Openings: {job.number_of_opening}</p>

                        <h3 className="text-lg font-semibold mt-4">Qualifications:</h3>
                        <p className="text-blue-600 font-semibold mt-2 flex items-center">
                            <FaPhone className="mr-2 text-blue-700" /> Contact: {job.contact}
                        </p>
                    </div>
                ))}
            </div></div>
    )
}

export default Jobs