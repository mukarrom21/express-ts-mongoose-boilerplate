import { z } from 'zod'

// Define schema for user name
const nameSchema = z.object({
  firstName: z.string({
    required_error: 'First name is required',
    invalid_type_error: 'First name must be a string',
  }),
  middleName: z.string().optional(),
  lastName: z.string({
    required_error: 'Last name is required',
    invalid_type_error: 'Last name must be a string',
  }),
})

// Define schema for student
const createFacultyValidationSchema = z.object({
  body: z.object({
    student: z.object({
      id: z.string({
        required_error: 'Student ID is required',
        invalid_type_error: 'Student ID must be a string',
      }),
      password: z
        .string({
          required_error: 'Password is required',
          invalid_type_error: 'Password must be a string',
        })
        .min(6, { message: 'Password must be minimum 6 characters' })
        .max(20, 'Password cannot be more than 20 characters'),
      name: nameSchema,
      gender: z.enum(['male', 'female']),
      dateOfBirth: z.string({
        required_error: 'Date of birth is required',
        invalid_type_error: 'Date of birth must be a string',
      }),
      email: z
        .string({
          required_error: 'Email is required',
          invalid_type_error: 'Email must be a valid email address',
        })
        .email(),
      contactNo: z.string({
        required_error: 'Contact number is required',
        invalid_type_error: 'Contact number must be a string',
      }),
      emergencyContactNo: z.string({
        required_error: 'Emergency contact number is required',
        invalid_type_error: 'Emergency contact number must be a string',
      }),
      bloodGroup: z.enum(['A+', 'AB+', 'B+', 'O+', 'A-', 'AB-', 'B-', 'O-']),
      presentAddress: z.string({
        required_error: 'Present address is required',
        invalid_type_error: 'Present address must be a string',
      }),
      permanentAddress: z.string({
        required_error: 'Permanent address is required',
        invalid_type_error: 'Permanent address must be a string',
      }),
      profileImg: z
        .string({
          required_error: 'Profile image URL is required',
          invalid_type_error: 'Profile image URL must be a valid URL',
        })
        .url()
        .optional(),
      academicDepartment: z.string({
        required_error: 'Academic department _id is required for referencing',
        invalid_type_error:
          'academic semester must be mongodb object id as string',
      }),
      isActive: z.enum(['active', 'blocked']).optional(),
      isDeleted: z.boolean().optional(),
    }),
  }),
})

// Define schema for student
const updateFacultyValidationSchema = z.object({
  body: z.object({
    student: z.object({
      id: z
        .string({
          invalid_type_error: 'Student ID must be a string',
        })
        .optional(),
      name: nameSchema.partial().optional(),
      gender: z.enum(['male', 'female']).optional(),
      dateOfBirth: z
        .string({
          invalid_type_error: 'Date of birth must be a string',
        })
        .optional(),
      email: z
        .string({
          invalid_type_error: 'Email must be a valid email address',
        })
        .email()
        .optional(),
      contactNo: z
        .string({
          invalid_type_error: 'Contact number must be a string',
        })
        .optional(),
      emergencyContactNo: z
        .string({
          invalid_type_error: 'Emergency contact number must be a string',
        })
        .optional(),
      bloodGroup: z
        .enum(['A+', 'AB+', 'B+', 'O+', 'A-', 'AB-', 'B-', 'O-'])
        .optional(),
      presentAddress: z
        .string({
          invalid_type_error: 'Present address must be a string',
        })
        .optional(),
      permanentAddress: z
        .string({
          invalid_type_error: 'Permanent address must be a string',
        })
        .optional(),
      profileImg: z
        .string({
          invalid_type_error: 'Profile image URL must be a valid URL',
        })
        .url()
        .optional(),
      academicDepartment: z
        .string({
          invalid_type_error:
            'academic semester must be mongodb object id as string',
        })
        .optional(),
      isActive: z.enum(['active', 'blocked']).optional(),
      isDeleted: z.boolean().optional(),
    }),
  }),
})

export const FacultyValidations = {
  createFacultyValidationSchema,
  updateFacultyValidationSchema,
}
