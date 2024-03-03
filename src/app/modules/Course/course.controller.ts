import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { CourseServices } from './course.service'

// Controller to create new course
const createNewCourseController = catchAsync(async (req, res) => {
  const result = await CourseServices.createNewCourseService(req.body)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Course created successfully',
    data: result,
  })
})

// Controller to find all Course
const findAllCourseController = catchAsync(async (req, res) => {
  const result = await CourseServices.findAllCoursesService(req.query)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Courses retrieved successfully',
    data: result,
  })
})

// Controller to find single Course by object id
const findSingleCourseByIdController = catchAsync(async (req, res) => {
  const result = await CourseServices.findSingleCourseService(req.params.id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course retrieved successfully',
    data: result,
  })
})

// Controller to update single Course by object id
const updateCourseController = catchAsync(async (req, res) => {
  const result = await CourseServices.updateCourseService(
    req.params.id,
    req.body,
  )
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course updated successfully',
    data: result,
  })
})

// Controller to delete Course by object id
const deleteCourseController = catchAsync(async (req, res) => {
  const result = await CourseServices.deleteCourseService(req.params.id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course deleted successfully',
    data: result,
  })
})

export const CourseControllers = {
  createNewCourseController,
  findAllCourseController,
  findSingleCourseByIdController,
  updateCourseController,
  deleteCourseController,
}
