import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jobsApi } from '../../../redux/features/jobSlice/JobSlice'
import {
  FaBriefcase,
  FaBuilding,
  FaClock,
  FaLaptop,
  FaMoneyBillWave,
  FaPhone,
  FaUserTie
} from 'react-icons/fa'
import Loader from '../../common/Loader'

function Jobs() {
  const dispatch = useDispatch()
  const hiring = useSelector((state) => state.jobsOffers)

  useEffect(() => {
    dispatch(jobsApi())
  }, [dispatch])

  if (hiring.loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    )
  }

  return (
    <div className=" min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        🚀 Available <span className="text-red-600">Job Listings</span>
      </h1>

      <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {hiring.jobsOffers?.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{job.title}</h2>

            <p className="text-gray-600 flex items-center text-sm mb-2">
              <FaBuilding className="mr-2 text-gray-500" />
              {job.company} - {job.location}
            </p>

            <p className="text-sm text-gray-700 mb-3 line-clamp-3">{job.description}</p>

            <div className="space-y-2 text-sm">
              <p className="flex items-center text-green-600 font-medium">
                <FaMoneyBillWave className="mr-2 text-green-700" />
                Salary: ${job.salary_from} - ${job.salary_to}
              </p>
              <p className="flex items-center text-blue-600">
                <FaBriefcase className="mr-2" />
                {job.employment_type}
              </p>
              <p className="flex items-center text-red-500">
                <FaClock className="mr-2" />
                Deadline: {job.application_deadline}
              </p>
              <p className="flex items-center text-yellow-600">
                <FaUserTie className="mr-2" />
                Category: {job.job_category}
              </p>
              <p className="flex items-center text-purple-600">
                <FaLaptop className="mr-2" />
                Remote: {job.is_remote_work ? 'Yes' : 'No'}
              </p>
              <p className="text-gray-700">Openings: {job.number_of_opening}</p>
            </div>

            <div className="mt-4 border-t pt-4">
              <h3 className="text-md font-semibold text-gray-700">Qualifications</h3>
              <p className="flex items-center text-blue-600 mt-1">
                <FaPhone className="mr-2" />
                Contact: {job.contact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Jobs
