// utils/auth.ts

interface User {
     sub: string;
     user_id: string;
     scope: string;
     iss: string;
     exp: number;
     iat: number;
     jti: string;
     username: string;
   }
   
   export const getUser = (): User | null => {
     const userJson = localStorage.getItem('user');
     if (userJson) {
       try {
         const user = JSON.parse(userJson) as User;
         return user;
       } catch (error) {
         console.error('Error parsing user data from localStorage', error);
         return null;
       }
     }
     return null;
   };
   
   export const isAuthenticated = (): boolean => {
     const user = getUser();
     return !!user; // Trả về true nếu có thông tin người dùng, ngược lại trả về false
   };
   export const isAdmin = (): boolean => {
     const user = getUser();
     return user?.scope === 'ADMIN'; // Trả về true nếu người dùng có quyền ADMIN
   };