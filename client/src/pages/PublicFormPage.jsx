import { useNavigate } from 'react-router-dom'
import { useFormFlow } from '../contexts/FormFlowContext'
import FormStepCard from '../components/FormStepCard'

export default function PublicFormPage() {
  const navigate = useNavigate()
  const {
    status,
    form,
    step,
    currentQuestion,
    progress,
    error,
    saving,
    submitStatus,
    isFirstStep,
    isLastStep,
    answers,
    setAnswer,
    nextStep,
    previousStep,
    submitResponse
  } = useFormFlow()

  const handleNext = async () => {
    if (isLastStep) {
      const success = await submitResponse()
      if (success) {
        navigate('success')
      }
      return
    }
    nextStep()
  }

  if (status === 'loading') {
    return <main className="page centered-page">Loading form…</main>
  }

  if (status === 'error') {
    return <main className="page centered-page error-text">{error || 'Unable to load the form.'}</main>
  }

  if (!form?.questions?.length) {
    return <main className="page centered-page">This form has no questions yet.</main>
  }

  return (
    <main className="public-shell" style={{ '--accent': form.theme?.accent || '#ff6b3d', '--surface': form.theme?.surface || '#fff1e8' }}>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <section className="public-card">
        <div className="public-topline">
          <span className="eyebrow">{form.title}</span>
          <span className="question-counter">
            {step + 1}/{form.questions.length}
          </span>
        </div>

        <h1>{currentQuestion?.title}</h1>
        {currentQuestion?.description && <p className="question-description">{currentQuestion.description}</p>}

        <FormStepCard question={currentQuestion} value={answers[currentQuestion?.id]} onChange={(value) => setAnswer(currentQuestion.id, value)} />

        {error ? <p className="error-text">{error}</p> : null}

        <div className="form-status-row">
          <span className="helper-text">{saving ? 'Auto-saving draft…' : 'Draft saved automatically.'}</span>
          <span className="helper-text">
            {submitStatus === 'submitting' ? 'Submitting…' : submitStatus === 'success' ? 'Submitted successfully' : ''}
          </span>
        </div>

        <div className="question-actions">
          <button className="secondary-btn" onClick={previousStep} disabled={isFirstStep || submitStatus === 'submitting'}>
            Back
          </button>
          <button className="primary-btn" onClick={handleNext} disabled={submitStatus === 'submitting'}>
            {isLastStep ? (submitStatus === 'submitting' ? 'Submitting…' : 'Submit') : 'Next'}
          </button>
        </div>
      </section>
    </main>
  )
}


