import { validatePassword, getPasswordStrength } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface PasswordStrengthProps {
  password: string;
  showCriteria?: boolean;
}

export function PasswordStrength({ password, showCriteria = true }: PasswordStrengthProps) {
  if (!password) return null;

  const validation = validatePassword(password);
  const strength = getPasswordStrength(password);

  const getStrengthColor = () => {
    switch (strength) {
      case 'weak': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'strong': return 'bg-green-500';
      default: return 'bg-gray-300';
    }
  };

  const getStrengthText = () => {
    switch (strength) {
      case 'weak': return 'Weak';
      case 'medium': return 'Medium';
      case 'strong': return 'Strong';
      default: return '';
    }
  };

  const criteria = [
    { label: '8+ chars', met: validation.hasMinLength },
    { label: 'Uppercase', met: validation.hasUppercase },
    { label: 'Lowercase', met: validation.hasLowercase },
    { label: 'Number', met: validation.hasNumber },
    { label: 'Symbol', met: validation.hasSymbol },
  ];

  return (
    <div className="space-y-1">
      {/* Strength Bar */}
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5 w-24 h-1.5">
          {[1, 2, 3, 4, 5].map((segment) => (
            <div
              key={segment}
              className={`flex-1 rounded-full transition-all duration-300 ${
                segment <= (strength === 'weak' ? 2 : strength === 'medium' ? 4 : 5)
                  ? getStrengthColor()
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <span className={`text-xs font-medium ${
          strength === 'weak' ? 'text-red-600' :
          strength === 'medium' ? 'text-yellow-600' :
          'text-green-600'
        }`}>
          {getStrengthText()}
        </span>
      </div>

      {/* Criteria List (compact, inline) */}
      {showCriteria && (
        <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1">
          {criteria.map((criterion, index) => (
            <span key={index} className={`flex items-center text-xs ${criterion.met ? 'text-green-600' : 'text-gray-400'}`}>
              {criterion.met ? (
                <Check className="h-3 w-3 mr-0.5" />
              ) : (
                <X className="h-3 w-3 mr-0.5" />
              )}
              {criterion.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
} 