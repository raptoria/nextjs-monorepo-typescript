import { mockApiHandlers } from './apis';
import { mockGraphQLHandlers } from './gql';
/**
 * these handlers will get passed to MSW
 * to toggle MSW on/off,  set NEXT_PUBLIC_API_MOCKING to "enabled" (_app.tsx checks this variable)
 * for unit tests (Jest/RTL) MSW is turned on by default
 */
export const handlers = [...mockApiHandlers, ...mockGraphQLHandlers];
