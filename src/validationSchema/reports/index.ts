import * as yup from 'yup';

export const reportValidationSchema = yup.object().shape({
  total_bug_fixes: yup.number().integer().required(),
  pending_tests: yup.number().integer().required(),
  running_tests: yup.number().integer().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
