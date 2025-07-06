import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Password validation utilities
export interface PasswordValidationResult {
  isValid: boolean;
  hasMinLength: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
  hasSymbol: boolean;
  errors: string[];
}

export function validatePassword(password: string): PasswordValidationResult {
  const minLength = 8;
  const hasMinLength = password.length >= minLength;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  const errors: string[] = [];
  
  if (!hasMinLength) errors.push(`At least ${minLength} characters`);
  if (!hasUppercase) errors.push("One uppercase letter");
  if (!hasLowercase) errors.push("One lowercase letter");
  if (!hasNumber) errors.push("One number");
  if (!hasSymbol) errors.push("One special character");

  return {
    isValid: hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSymbol,
    hasMinLength,
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSymbol,
    errors
  };
}

export function getPasswordStrength(password: string): 'weak' | 'medium' | 'strong' {
  const validation = validatePassword(password);
  const validCriteria = [
    validation.hasMinLength,
    validation.hasUppercase,
    validation.hasLowercase,
    validation.hasNumber,
    validation.hasSymbol
  ].filter(Boolean).length;

  if (validCriteria <= 2) return 'weak';
  if (validCriteria <= 4) return 'medium';
  return 'strong';
}
