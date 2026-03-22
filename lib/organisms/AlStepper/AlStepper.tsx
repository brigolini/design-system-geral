import type { AlStepperProps } from './AlStepper.types';
import { cn } from '../../utils/cn';
import { alStepperClasses } from '../../utils/classMap';

export function AlStepper({
  steps,
  activeStep,
  onStepChange,
  className,
  'data-testid': testId,
}: AlStepperProps) {
  return (
    <div data-testid={testId} className={className}>
      <div className={alStepperClasses.stepper} role="tablist" aria-label="Progress">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isCompleted = index < activeStep;
          const canClick = step.isValid !== false && (isCompleted || index <= activeStep);

          return (
            <div
              key={index}
              className={cn(
                alStepperClasses.step,
                isActive && alStepperClasses.stepActive,
                isCompleted && alStepperClasses.stepCompleted,
                !canClick && !isActive && alStepperClasses.stepDisabled,
                canClick && alStepperClasses.stepClickable,
              )}
              role="tab"
              aria-selected={isActive}
              aria-label={`Step ${index + 1}: ${step.label}`}
              onClick={() => canClick && onStepChange(index)}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && canClick) {
                  e.preventDefault();
                  onStepChange(index);
                }
              }}
              tabIndex={canClick ? 0 : -1}
            >
              <span className={alStepperClasses.stepNumber}>
                {isCompleted ? '✓' : index + 1}
              </span>
              <span className={alStepperClasses.stepLabel}>{step.label}</span>
              {index < steps.length - 1 && (
                <span className={alStepperClasses.stepConnector} />
              )}
            </div>
          );
        })}
      </div>
      <div className={alStepperClasses.content} role="tabpanel">
        {steps[activeStep]?.content}
      </div>
    </div>
  );
}
